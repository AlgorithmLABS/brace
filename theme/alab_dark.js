ace.define(
  "ace/theme/alab_dark",
  ["require", "exports", "module", "ace/lib/dom"],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-alab-dark";
    exports.cssText =
      ".ace-alab-dark .ace_gutter {\
background: #384B6B;\
color: #a9a9a9\
}\
.ace-alab-dark .ace_print-margin {\
width: 1px;\
background: #384B6B\
}\
.ace-alab-dark {\
background-color: #384B6B;\
color: #E6E1DC\
}\
.ace-alab-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-alab-dark .ace_storage {\
color: #93A1A1\
}\
.ace-alab-dark .ace_cursor,\
.ace-alab-dark .ace_string.ace_regexp {\
color: #7991E8\
}\
.ace-alab-dark .ace_marker-layer .ace_active-line,\
.ace-alab-dark .ace_marker-layer .ace_selection {\
background: rgba(255, 255, 255, 0.1)\
}\
.ace-alab-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #002B36;\
}\
.ace-alab-dark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-alab-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(147, 161, 161, 0.50)\
}\
.ace-alab-dark .ace_gutter-active-line {\
background-color: #0d3440\
}\
.ace-alab-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid #073642\
}\
.ace-alab-dark .ace_invisible {\
color: rgba(147, 161, 161, 0.50)\
}\
.ace-alab-dark .ace_keyword,\
.ace-alab-dark .ace_meta,\
.ace-alab-dark .ace_support.ace_class,\
.ace-alab-dark .ace_support.ace_type {\
color: #aac6e3\
}\
.ace-alab-dark .ace_constant.ace_character,\
.ace-alab-dark .ace_constant.ace_other {\
color: #CB4B16\
}\
.ace-alab-dark .ace_constant.ace_language {\
color: #B58900\
}\
.ace-alab-dark .ace_constant.ace_numeric {\
color: #D33682\
}\
.ace-alab-dark .ace_fold {\
background-color: #268BD2;\
border-color: #93A1A1\
}\
.ace-alab-dark .ace_entity.ace_name.ace_function,\
.ace-alab-dark .ace_entity.ace_name.ace_tag,\
.ace-alab-dark .ace_support.ace_function,\
.ace-alab-dark .ace_variable,\
.ace-alab-dark .ace_variable.ace_language {\
color: #268BD2\
}\
.ace-alab-dark .ace_string {\
color: #2AA198\
}\
.ace-alab-dark .ace_comment {\
font-style: italic;\
color: #657B83\
}\
.ace-alab-dark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
