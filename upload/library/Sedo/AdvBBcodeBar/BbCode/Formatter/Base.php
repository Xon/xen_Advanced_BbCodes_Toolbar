<?php
class Sedo_AdvBBcodeBar_BbCode_Formatter_Base extends XFCP_Sedo_AdvBBcodeBar_BbCode_Formatter_Base
{
    public function getTags()
    {
        $parentTags = parent::getTags();

        if(is_array($parentTags))
        {
            $parentTags += array(
                'slide' => array(
                    'allowedParents' => array('accordion' => 1, 'tabs' => 1, 'slider' => 1),
                )
            );
        } 
        return $parentTags;
    }
}