<?php
/* Smarty version 3.1.32, created on 2018-12-13 16:58:19
  from 'C:\OpenServer\domains\test.local\protected\app\core\admin-template\view\structure\index\edit.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5c12657b77f569_14085584',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a4ebe09e02d76e6c318872743e3bf110e9411f17' => 
    array (
      0 => 'C:\\OpenServer\\domains\\test.local\\protected\\app\\core\\admin-template\\view\\structure\\index\\edit.tpl',
      1 => 1512138870,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:system/buttons.tpl' => 1,
  ),
),false)) {
function content_5c12657b77f569_14085584 (Smarty_Internal_Template $_smarty_tpl) {
?><form method="post" id="form_stc"><input type="hidden" name="action" value="edit">	<?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_meta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>	<?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_og.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>	<?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_structure.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?><div class="button-container-structure"><a href="#" class="button button-purple button-container-structure-add" onclick="return cp.addBlock(<?php echo $_smarty_tpl->tpl_vars['stc_page']->value['id'];?>
, event);"><i class="zmdi zmdi-plus-circle"></i> Добавить часть страницы</a><?php $_smarty_tpl->_subTemplateRender("file:system/buttons.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?></div></form><?php }
}
