<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\Repositories\ProductRepository as Product;

class StoreTransactionComplete extends Event
{
    use SerializesModels;

    public $transaction;
    public $products;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($transaction, $products)
    {
        $this->transaction = $transaction;
        $this->products = $products;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
