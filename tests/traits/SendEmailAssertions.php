<?php 


trait SendEmailAssertions {

	/**
	 * Emails being Sent
	 * @var array
	 */
	protected $emails = [];

	
	/** @before */
	function setupEmailAssertions() {
		Mail::getSwiftMailer()
            ->registerPlugin(new TestingMailEventListener($this));
	}


	

    /**
     * Check to See if Email was Sent
     * @return  boolean
    */
    public function seeEmailWasSent() {
        $this->assertNotEmpty($this->emails, 'No emails have been sent.');
	    return $this;
    }


     /**
     * Check to See if Email was NOT Sent
     * @return  boolean
    */
    public function seeEmailWasNotSent() {
        $this->assertEmpty($this->emails, 'Did not expect email to be sent.');
	    return $this;
    }

    /**
     * See the Count of Emails Sent
     * @param  int $count 
     * @return boolean
     */
    public function seeEmailsSent($count) {
        $emailsSent = count($this->emails);

        $this->assertCount(
            $count, $this->emails,
            "Expected $count emails to have been sent. Only $emailsSent were"
        );

        return $this;
    }


    /**
     * See the email was sent to a recipenet
     * @param  string $recipient 
     * @return boolean            
     */
    public function seeEmailWasSentTo($recipient, Swift_Message $message = null) {
    	$this->assertArrayHasKey(
    		$recipient, $this->getEmail($message)->getTo(),
    		"No email was sent to $recipient"
    	);

    	return $this;
    }



     /**
     *  See email was sent from sender
     * @param  string $sender
     * @return boolean            
     */
    public function seeEmailWasSentFrom($sender, Swift_Message $message = null) {
    	$this->assertArrayHasKey(
    		$sender, $this->getEmail($message)->getFrom(),
    		"No email was sent from $sender"
    	);

    	return $this;
    }



    /**
     * Email Body Contains and Excerpt
     * @param  String             $excerpt 
     * @param  Swift_Message|null $message 
     * @return boolean                      
     */
    public function seeEmailContains($excerpt, Swift_Message $message = null) {
    	
    	$this->assertContains(
    		$excerpt, $this->getEmail($message)->getBody(),
    		"There was no string matching the provided Body"
    	);

    	return $this;

    }

    

    /**
     * Email Subject equals provided subject
     * @param  string             $subject 
     * @param  Swift_Message|null $message 
     * @return boolean                      
     */
    public function seeEmailSubjectEquals($subject, Swift_Message $message = null) {
    	$this->assertEquals(
    		$subject, $this->getEmail($message)->getSubject(),
    		"The email subject does not match the provided string"
    	);

    	return $this;
    }

/*
|--------------------------------------------------------------------------
| Class Specific Methods
|--------------------------------------------------------------------------
|
|
*/

    /**
     * Returns the Message or the Last Email
     * @param  Swift_Message|null $message 
     * @return Swift_Message
     */
    protected function getEmail(Swift_Message $message = null) {
    	$this->seeEmailWasSent();
    	return $message ?: $this->lastEmail(); 
    }

	/**
	 * Returns the last of the email array
	 * @return Swift_Message
	 */
    protected function lastEmail() {
    	return end($this->emails);
    }


    /**
	 * Add To Email Array
	 * @param Swift_Message $email 
	 */
	public function addEmail(Swift_Message $email) {
        $this->emails[] = $email;
    }

}


/*
|--------------------------------------------------------------------------
| Mail Event Listener for TEsting
|--------------------------------------------------------------------------
|
*/

class TestingMailEventListener implements Swift_Events_EventListener {

    protected $test;
    
    public function __construct($test) {
        $this->test = $test;
    }
    
    public function beforeSendPerformed($event) {
    	$this->test->addEmail($event->getMessage());
    }
}