<?php
/* Smarty version 3.1.32, created on 2018-12-13 16:57:38
  from 'C:\OpenServer\domains\test.local\protected\app\core\admin-template\auth.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5c126552578e02_43574372',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7ee1075a662bffb8ef63f7eff24a6140845968fa' => 
    array (
      0 => 'C:\\OpenServer\\domains\\test.local\\protected\\app\\core\\admin-template\\auth.tpl',
      1 => 1522934012,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:system/controll.tpl' => 1,
  ),
),false)) {
function content_5c126552578e02_43574372 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'C:\\OpenServer\\domains\\test.local\\protected\\app\\libs\\smarty.plugins\\modifier.capi.php','function'=>'smarty_modifier_capi',),));
?><!DOCTYPE html>
<!-- (c) lnk. celebro | celebro.ru -->
<html lang="ru" class="no-js"><head><meta charset="UTF-8"><meta content="on" http-equiv="cleartype"><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><meta content="width=device-width, initial-scale=1.0" name="viewport"><meta content="noindex,nofollow" name="robots"><meta content="CELEBRO.CMS" name="CMS"><meta content="http://cms.celebro.ru/" name="author"><meta content="celebro.ru" name="copyright"><link rel="stylesheet" href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/css/main.min.css"><link rel="icon" type="image/png" href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/images/favicon.png"><title><?php echo smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['authorization']);?>
 | CELEBRO.CMS</title></head><body class="page-auth"><div class="auth-wrapper"><form method="post" class="auth-form clearfix"><div class="celebro-cms">CELEBRO<span>.CMS</span></div><h1><?php echo smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['authorization']);?>
</h1><input type="hidden" name="auth" value="1"><input name="login" placeholder="<?php echo smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['login']);?>
" class="input"><input type="password" name="password" placeholder="<?php echo smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['password']);?>
" class="input"><div class="buttons"><button type="submit" class="m-btn blue button"><?php echo smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['log_in']);?>
</button><div class="checkbox-conteiner"><?php $_smarty_tpl->_subTemplateRender("file:system/controll.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('type'=>"checkbox",'needle'=>$_COOKIE['savepassword'],'name'=>"save",'value'=>"1",'text'=>smarty_modifier_capi($_smarty_tpl->tpl_vars['locale']->value['remember_me'])), 0, false);
?></div></div></form></div></body></html><?php }
}
