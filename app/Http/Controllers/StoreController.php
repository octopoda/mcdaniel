<?php

namespace App\Http\Controllers;

use Event;
use App\Events\StoreTransactionComplete;
use App\Events\StoreTransactionError;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\ProductRepository as Product;
use App\Repositories\StoreRepository as Store;
use App\Repositories\TransactionRepository as Transaction;

use App\Repositories\Criteria\Product\PublishedProducts;

class StoreController extends Controller
{
    
    /**
     * Product Model
     * @var App\Product
     */
    protected $product;

    /**
     * Store Model
     * @var App\Product
     */
    protected $store; 

    
    /**
     * @param Product $product 
     */
    public function __construct(Product $product, Store $store, Transaction $transaction) {
        $this->store = $store;
        $this->product = $product;
        $this->transaction = $transaction;
    }



/*
|--------------------------------------------------------------------------
| Backend Methods
|--------------------------------------------------------------------------
|
|
*/
   
      /**
     * Show the Store Options
     * @return /Illumination/Http/Response 
     */
    public function index() {
        $store = $this->store->find(1);
        return view('dashboard.setup.store', compact('store'));
    }


    /**
     * Show Edit View for Store Setup
     * @return /Illumination/Http/Response 
     */
    public function edit() {
        $store = $this->store->find(1);
        return view('dashboard.setup.store-edit', compact('store'));
    }


    /**
     * Update the Store Options and return to index
     * @return /Illumination/Http/Response 
     */
    public function update(Request $request) {
        $store = $this->store->find(1);
        $store->update($request->all());
        flash()->success('The store has been updated');
        return view('dashboard.setup.store', compact('store'));
    }

/*
|--------------------------------------------------------------------------
| View Based Methods
|--------------------------------------------------------------------------
|
|
*/

    /**
     * Get all Products 
     * @return /Illumination/Http/Response 
     */
    public function getAllProducts() {
        $store = $this->store->find(1);
        
        if ($store->published == 0) {
            return redirect('/');
        }

        $products = $this->product->pushCriteria(new PublishedProducts ())->all();
        return view('store.index', compact('products', 'store'));
    }

    
    /**
     * Return the Product by the Title
     * @param  string $title 
     * @return \Illuminate\Http\Response 
     */
    public function productByTitle($title) {
        $store = $this->store->find(1);
        
        if ($store->published == 0) {
            return redirect('/');
        }

        $product = $this->product->findBy('direct_link', $title);
        return view('store.product', compact('product', 'store'));
    }


/*
|--------------------------------------------------------------------------
| API Based Methods
|--------------------------------------------------------------------------
|
|
*/

    /**
     * Get the transaction. Log it, and Send the users to the downloads. 
     * @return [type] [description]
     */
    public function transactionComplete() {
        $tx = $_GET['tx'];

        $url = 'https://www.paypal.com/cgi-bin/webscr';
        $token = "a6Q-t2tj1hswo-RY7gzYbsqdIBnvG6jsPFlzzb66IoNvFHxT_rvj8wk2XeG";
        
        $env = env('APP_ENV');

        //Switch to sandbox for testing.
        if ($env == 'local') {
            $url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
            $token = "rwZ1wgfwH_YjPauEhirIRSfM5WoCYvTme7Ik5jknuC___b8Aae_OSP-HLMG";
        } 

        // Init cURL
        $request = curl_init();
        // dd($url);

        // Set request options
        curl_setopt_array($request, array
        (
          CURLOPT_URL => $url, 
          CURLOPT_POST => TRUE,
          CURLOPT_POSTFIELDS => http_build_query(array
            (
              'cmd' => '_notify-synch',
              'tx' => $tx,
              'at' => $token,
            )),
          CURLOPT_RETURNTRANSFER => TRUE,
          CURLOPT_HEADER => FALSE,
          // CURLOPT_SSL_VERIFYPEER => TRUE,
          // CURLOPT_CAINFO => 'cacert.pem',
        ));

        // Execute request and get response and status code
        $response = curl_exec($request);
        $status   = curl_getinfo($request, CURLINFO_HTTP_CODE);

        // Close connection
        curl_close($request);


        if ($status == 200 and strpos($response, 'SUCCESS') === 0) {
            // Remove SUCCESS part (7 characters long)
            $response = substr($response, 7);
            $items = [];

            // URL decode
            $response = urldecode($response);
            
            // Turn into associative array
            preg_match_all('/^([^=\s]++)=(.*+)/m', $response, $m, PREG_PATTERN_ORDER);
            $response = array_combine($m[1], $m[2]);

            // Fix character encoding if different from UTF-8 (in my case)
            if(isset($response['charset']) AND strtoupper($response['charset']) !== 'UTF-8')
            {
              foreach($response as $key => &$value)
              {
                $value = mb_convert_encoding($value, 'UTF-8', $response['charset']);
                $item_keys = explode('_', $key);
                
                if ($item_keys[0] == 'item' && strpos($item_keys[1], 'number') === 0) {
                    $items[] = $value;
                }
              }
              $response['charset_original'] = $response['charset'];

              $response['charset'] = 'UTF-8';
            }

            // Sort on keys for readability (handy when debugging)
            ksort($response);

            $transaction = [
                "transaction_id" => $tx,
                "email" => $response['payer_email'],
                "payer_id" => $response['payer_id'],
                "total" => $response['mc_gross'],
                "fee" => $response['mc_fee'],
                "items" => json_encode($items)
            ];


            $transaction = $this->transaction->create($transaction);

            $products = [];

            foreach($items as $item) {
              $products[] = $this->product->find($item);
            }

            $this->fireEvent($transaction, $products);
            // return redirect('/store/downloads/'. $tx);

        } else {
            // return redirect('/store/transaction-error/'. $tx);
        }
    }


    public function transactionError($tx) {
        Event::fire(new StoreTransactionError($tx));
        return view('store.error');
    }

    /**
     * Send out the emails
     * @param  App/Transaction $transaction 
     * @param  Collection $products    
     * @return Event              
     */
    public function fireEvent($transaction, $products) {
       Event::fire(new StoreTransactionComplete($transaction, $products));
    }


    public function transactionTest() {
      $transaction = $this->transaction->find(3);
      $products = [];
      foreach (json_decode($transaction->items) as $item) {
        $products[] = $this->product->find($item);
      }
      

      Event::fire(new StoreTransactionComplete($transaction, $products));
      return 'just testing';
    }



    /**
     * Show the Download Pages after a transaction
     * @param  int $transaction_id 
     * @return /Illuminate/Html/Response                 
     */
    public function getDownloads($transaction_id) {
        $transaction = $this->transaction->findBy('transaction_id', $transaction_id);
        $items = json_decode($transaction->items);

        $products = [];

        foreach ($items as $item) {
            $products[] = $this->product->find($item);
        }

        return view('store.download', compact('products', 'transaction'));
    }


    /**
     * Api Call to download Product
     * @param  int $id 
     * @return JSON    
     */
    public function downloadProduct($transaction_id, $id) {
        $product = null;
        $transaction = $this->transaction->findBy('transaction_id', $transaction_id);
        if ($transaction == false ) {
            exit('Sorry you do not have a transacton with us.');
        } else {
            $product = $this->product->find($id);
        }

        $name = (basename($product->url).PHP_EOL);
        header("Content-type: application/pdf");
        header("Content-Disposition: attachment; filename={$name}");
        readfile(str_replace(" ", "+", $product->url));
    }


    /**
     * Show the Transaction Detial for Dashboard
     * @param  int $id 
     * @return /Illuminate/Html/Response
     */
    public function transactionDetail($id) {
      $transaction = $this->transaction->find($id);
      $items = json_decode($transaction->items);

        $products = [];

        foreach ($items as $item) {
            $products[] = $this->product->find($item);
        }

        return view('dashboard.products.transactions', compact('products', 'transaction'));
    }
}
