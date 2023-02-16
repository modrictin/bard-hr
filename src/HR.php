<?php

namespace Modrictin\BardHR;

use ProseMirrorToHtml\Nodes\Node;

class HR extends Node
{
    protected $nodeType = 'horizontal_ruler';
    protected $tagName = 'hr';

    public function selfClosing()
    {
        return true;
    }
}
