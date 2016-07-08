<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ServiceFormSubmited extends Event
{
    use SerializesModels;

    public $mailRequest;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($mailRequest)
    {
        $this->mailRequest = $mailRequest;
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
