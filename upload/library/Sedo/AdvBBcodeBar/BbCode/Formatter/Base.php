<?php
class Sedo_AdvBBcodeBar_BbCode_Formatter_Base extends XFCP_Sedo_AdvBBcodeBar_BbCode_Formatter_Base
{
    public function getTags()
    {
        $parentTags = parent::getTags();

        Sedo_AdvBBcodeBar_BbCode_Formatter_AdvBbCodes::populateTags($parentTags);

        return $parentTags;
    }
}