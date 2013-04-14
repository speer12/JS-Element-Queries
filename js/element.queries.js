// JavaScript Document

$(document).ready(function(){

isIE = eval("/*@cc_on!@*/!1");

$sheets = document.styleSheets;
	$.each($sheets, function(index, value){
		if(value.title == 'eq_stylesheet'){
			$styleSheet = value;
		}
	});
	$.each($styleSheet.cssRules, function(index, value){
		if(value.selectorText){
			$check = value.selectorText.indexOf('lt-');
			if($check >= 0 ){
			  $comma_check = value.selectorText.indexOf(',');
			  if($comma_check >= 0){
			    $attr_parts = value.selectorText.split(',');
  			    $.each($attr_parts, function(index, value){
  			      $text = value.trim();
  			      $check = $text.indexOf('lt-');
  			      if(isIE){
  			        $space_check = $text.indexOf(' ');
                if($space_check >= 0){
                  $text = $text.substring(0, $space_check);
                }
  			        var re2='((?:[a-z][a-z]+))';
                var re3='(.)';
                var re4='(\\d+)';
                var p = new RegExp(re2+re3+re4,["i"]);
                $attr = $text.replace(p, '');
                $attr = $attr.replace('.', '');
  			      }else{
                $attr = $text.substring(0, ($check - 1));
  			      }
  			      $check2 = $text.indexOf('lt-');
  			      if($check2 >= 0){
                $lt_string = $text.substring($check, $text.length);
                addLtAttr($lt_string, $attr);
  			      }
  			  });
			  }else{
			    if(isIE){
			      $text = value.selectorText;
            $space_check = $text.indexOf(' ');
            if($space_check >= 0){
              $text = $text.substring(0, $space_check);
            }
            var re2='((?:[a-z][a-z]+))';
            var re3='(.)';
            var re4='(\\d+)';
            var p = new RegExp(re2+re3+re4,["i"]);
            $attr = $text.replace(p, '');
            $attr = $attr.replace('.', '');
          }else{
            $attr = value.selectorText.substring(0, ($check - 1));
          }
          $lt_string = value.selectorText.substring($check, value.selectorText.length);
          addLtAttr($lt_string, $attr);
			  }
				
			}
			
			$gt_check = value.selectorText.indexOf('gt-');
			if($gt_check >= 0 ){
        $comma_check = value.selectorText.indexOf(',');
        if($comma_check >= 0){
          $attr_parts = value.selectorText.split(',');
            $.each($attr_parts, function(index, value){
              $text = value.trim();
              $check = $text.indexOf('gt-');
              if(isIE){
                $space_check = $text.indexOf(' ');
                if($space_check >= 0){
                  $text = $text.substring(0, $space_check);
                }
                var re2='((?:[a-z][a-z]+))';
                var re3='(.)';
                var re4='(\\d+)';
                var p = new RegExp(re2+re3+re4,["i"]);
                $attr = $text.replace(p, '');
                $attr = $attr.replace('.', '');
              }else{
                $attr = $text.substring(0, ($check - 1));
              }
              $check2 = $text.indexOf('gt-');
              if($check2 >= 0){
                $gt_string = $text.substring($check, $text.length);
                addGtAttr($gt_string, $attr);

            }
          });
        }else{
          if(isIE){
            $text = value.selectorText;
            $space_check = $text.indexOf(' ');
            if($space_check >= 0){
              $text = $text.substring(0, $space_check);
            }
            var re2='((?:[a-z][a-z]+))';
            var re3='(.)';
            var re4='(\\d+)';
            var p = new RegExp(re2+re3+re4,["i"]);
            $attr = $text.replace(p, '');
            $attr = $attr.replace('.', '');
          }else{
            $attr = value.selectorText.substring(0, ($check - 1));
          }
          $gt_string = value.selectorText.substring($gt_check, value.selectorText.length);
          addGtAttr($gt_string, $attr);
        }
        
      }
		}
		
		$eq = $('.eq');
		
		responsiveClasses($eq);
		
	});

});

$(window).resize(function(){
	responsiveClasses($eq);
});

function responsiveClasses($eq){
	$.each($eq, function(index, value){
		$current = value;
		$lt = $($current).attr('lt');
		if($lt){
		  $lt_array = $lt.split(' ');
      $.each($lt_array, function(index, value){
        if($($current).width() < value){
          $($current).addClass('lt-' + value);
        }else{
          $($current).removeClass('lt-' + value);
        }
      });
		}
		
		
		$gt = $($current).attr('gt');
		if($gt){
		  $gt_array = $gt.split(' ');
      $.each($gt_array, function(index, value){
        if($($current).width() > value){
          $($current).addClass('gt-' + value);
        }else{
          $($current).removeClass('gt-' + value);
        }
      });
		}
    
	});
	

}

function addLtAttr($lt_string, $attr){
  $space_check = $lt_string.indexOf(' ');
  if($space_check >= 0){
    $lt_string = $lt_string.substring(0, $space_check);
  }
  $lt_string = $lt_string.trim();
  $lt_string = $lt_string.replace('lt-', '');
  var re2='((?:[a-z][a-z]+))';
  var re3='(.)';
  var re4='(\\d+)';
  var p = new RegExp(re2+re3+re4,["i"]);
  $lt_string = $lt_string.replace(p, '');
  $lt_string = $lt_string.replace('.', '');
  if(isIE){
    var p = new RegExp(re2, ["i"]);
    $lt_string = $lt_string.replace(p, '');
    $lt_string = $lt_string.replace('.', '');
  }
  $($attr).each(function(){
    $(this).addClass('eq');
    $lt = $(this).attr('lt');
    if($lt){
      $check2 = $lt.indexOf($lt_string);
      if($check2 == -1){
        $lt_added = $lt + ' ' + $lt_string;
      }else{
        $lt_added = $lt;
      }
    }else{
      $lt_added = $lt_string;
    }
    $(this).attr('lt', $lt_added);
  });
}

function addGtAttr($gt_string, $attr){
  $space_check = $gt_string.indexOf(' ');
  if($space_check >= 0){
    $gt_string = $gt_string.substring(0, $space_check);
  }
  $gt_string = $gt_string.trim();
  $gt_string = $gt_string.replace('gt-', '');
  var re2='((?:[a-z][a-z]+))';
  var re3='(.)';
  var re4='(\\d+)';
  var p = new RegExp(re2+re3+re4,["i"]);
  $gt_string = $gt_string.replace(p, '');
  $gt_string = $gt_string.replace('.', '');
  if(isIE){
    var p = new RegExp(re2, ["i"]);
    $gt_string = $gt_string.replace(p, '');
    $gt_string = $gt_string.replace('.', '');
  }
  $($attr).each(function(){
    $(this).addClass('eq');
    $gt = $(this).attr('gt');
    if($gt){
      $check2 = $gt.indexOf($gt_string);
      if($check2 == -1){
        $gt_added = $gt + ' ' + $gt_string;
      }else{
        $gt_added = $gt;
      }
    }else{
      $gt_added = $gt_string;
    }
    $(this).attr('gt', $gt_added);
  });
}



