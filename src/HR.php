<?php

namespace Modrictin\BardHR;

use Tiptap\Core\Mark;
use Tiptap\Core\Node;


class HR extends Node
{
    public static $name = 'horizontalRuler';

    public function renderHTML($mark, $attributes = []): array
    {
        return [
            'hr',
        ];
    }
}
