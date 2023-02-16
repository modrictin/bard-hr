<?php

namespace Modrictin\BardHR;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/hr.js',
    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addNode(HR::class);
    }
}
