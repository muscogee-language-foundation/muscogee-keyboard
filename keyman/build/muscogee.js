if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_muscogee());
}
function Keyboard_muscogee()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_muscogee";
  this.KN="muscogee";
  this.KMINVER="15.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "default": ["","1","2","3","4","5","6","7","8","9","0","-","=","","","","q","w","e","r","t","y","u","i","o","p","[","]","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","","z","x","c","v","b","n","m",",",".","/","","","","","",""],
    "shift-ctrl": ["","","","","","","","","","","","","","","","","","","Ē","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
    "ctrl": ["","","","","","","","","","","","","","","","","","","ē","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT | modCodes.CTRL /* 0x0030 */;
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "U_0119",
                    "text": "\u0119"
                  }
                ]
              },
              {
                "id": "U_0113",
                "text": "\u0113",
                "sk": [
                  {
                    "id": "U_0113_0328",
                    "text": "\u0119\u0304"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "U_012F",
                    "text": "\u012F"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F4"
                  },
                  {
                    "id": "U_01EB",
                    "text": "\u01EB"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E2"
                  },
                  {
                    "id": "U_0105",
                    "text": "\u0105"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "U_031C",
                "text": "\u031C",
                "hint": "\u031C"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "140",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "U_0027",
                "text": "'"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "120",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE",
                "sk": [
                  {
                    "id": "U_0113",
                    "text": "\u0113"
                  }
                ]
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00CB",
                    "text": "\u0118"
                  }
                ]
              },
              {
                "id": "U_0112",
                "text": "\u0112"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CE",
                    "text": "\u00CE"
                  },
                  {
                    "id": "U_012E",
                    "text": "\u012E"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D4",
                    "text": "\u00D4"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C2",
                    "text": "\u00C2"
                  },
                  {
                    "id": "U_0104",
                    "text": "\u0104"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "U_031C",
                "text": "\u031C",
                "hint": "\u031C"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00C7",
                    "text": "\u00C7"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "50",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "\\"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "symbol",
                "width": "110",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "\u00A7"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0060",
                "text": "`"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "U_00A8",
                "text": "\u00A8"
              },
              {
                "id": "U_00B4",
                "text": "\u00B4"
              },
              {
                "id": "U_00B8",
                "text": "\u00B8"
              },
              {
                "id": "U_00AF",
                "text": "\u00AF"
              },
              {
                "id": "U_00BF",
                "text": "\u00BF"
              },
              {
                "id": "U_00A1",
                "text": "\u00A1"
              },
              {
                "id": "U_00AC",
                "text": "\u00AC"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_00AA",
                "pad": "50",
                "text": "\u00AA"
              },
              {
                "id": "U_00BA",
                "text": "\u00BA"
              },
              {
                "id": "U_00B6",
                "text": "\u00B6"
              },
              {
                "id": "U_00A7",
                "text": "\u00A7"
              },
              {
                "id": "U_00B1",
                "text": "\u00B1"
              },
              {
                "id": "U_00D7",
                "text": "\u00D7"
              },
              {
                "id": "U_00F7",
                "text": "\u00F7"
              },
              {
                "id": "U_00A6",
                "text": "\u00A6"
              },
              {
                "id": "U_00B0",
                "text": "\u00B0"
              },
              {
                "width": "10",
                "id": "T_new_573",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "id": "U_00B5",
                "text": "\u00B5"
              },
              {
                "id": "U_00A9",
                "text": "\u00A9"
              },
              {
                "id": "U_00AE",
                "text": "\u00AE"
              },
              {
                "id": "U_00A3",
                "text": "\u00A3"
              },
              {
                "id": "U_20AC",
                "text": "\u20AC"
              },
              {
                "id": "U_00A5",
                "text": "\u00A5"
              },
              {
                "id": "U_2022",
                "text": "\u2022"
              },
              {
                "id": "U_00B7",
                "text": "\u00B7"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_W",
                "pad": "50",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E8"
                  },
                  {
                    "id": "U_00E9"
                  },
                  {
                    "id": "U_00EA"
                  }
                ]
              },
              {
                "id": "U_0113",
                "text": "\u0113",
                "hint": "\u0113"
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "id": "U_00F9"
                  },
                  {
                    "id": "U_00FA"
                  },
                  {
                    "id": "U_00FB"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "U_00EC"
                  },
                  {
                    "id": "U_00ED"
                  },
                  {
                    "id": "U_00EE"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F2"
                  },
                  {
                    "id": "U_00F3"
                  },
                  {
                    "id": "U_00F4"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E0"
                  },
                  {
                    "id": "U_00E1"
                  },
                  {
                    "id": "U_00E2"
                  },
                  {
                    "id": "U_00E3"
                  },
                  {
                    "id": "U_00E4"
                  },
                  {
                    "id": "U_00E5"
                  },
                  {
                    "id": "U_00E6"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "U_031C",
                "text": "\u031C",
                "hint": "\u031C"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "id": "U_00E7"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "id": "U_00F1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "m",
                "hint": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "id": "U_00CB",
                    "text": "\u00CB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T",
                "sk": [
                  {
                    "id": "U_00DE",
                    "text": "\u00DE"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "Y",
                "sk": [
                  {
                    "id": "U_00DD",
                    "text": "\u00DD"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "id": "U_00D9",
                    "text": "\u00D9"
                  },
                  {
                    "id": "U_00DA",
                    "text": "\u00DA"
                  },
                  {
                    "id": "U_00DB",
                    "text": "\u00DB"
                  },
                  {
                    "id": "U_00DC",
                    "text": "\u00DC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CC",
                    "text": "\u00CC"
                  },
                  {
                    "id": "U_00CD",
                    "text": "\u00CD"
                  },
                  {
                    "id": "U_00CE",
                    "text": "\u00CE"
                  },
                  {
                    "id": "U_00CF",
                    "text": "\u00CF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D2",
                    "text": "\u00D2"
                  },
                  {
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "id": "U_00D4",
                    "text": "\u00D4"
                  },
                  {
                    "id": "U_00D5",
                    "text": "\u00D5"
                  },
                  {
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "id": "U_00D8",
                    "text": "\u00D8"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "id": "U_00C1",
                    "text": "\u00C1"
                  },
                  {
                    "id": "U_00C2",
                    "text": "\u00C2"
                  },
                  {
                    "id": "U_00C3",
                    "text": "\u00C3"
                  },
                  {
                    "id": "U_00C4",
                    "text": "\u00C4"
                  },
                  {
                    "id": "U_00C5",
                    "text": "\u00C5"
                  },
                  {
                    "id": "U_00C6",
                    "text": "\u00C6"
                  }
                ]
              },
              {
                "id": "U_E2",
                "text": "\u0112",
                "hint": "\u0112"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00C7",
                    "text": "\u00C7"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "id": "U_00D1",
                    "text": "\u00D1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "U_02ED",
                "text": "\u02ED"
              },
              {
                "id": "U_031C",
                "text": "\u031C",
                "hint": "\u031C"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "70",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "\\"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "symbol",
                "width": "110",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "\u00A7"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0060",
                "text": "`"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "U_00A8",
                "text": "\u00A8"
              },
              {
                "id": "U_00B4",
                "text": "\u00B4"
              },
              {
                "id": "U_00B8",
                "text": "\u00B8"
              },
              {
                "id": "U_00AF",
                "text": "\u00AF"
              },
              {
                "id": "U_00BF",
                "text": "\u00BF"
              },
              {
                "id": "U_00A1",
                "text": "\u00A1"
              },
              {
                "id": "U_00AC",
                "text": "\u00AC"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_00AA",
                "pad": "70",
                "text": "\u00AA"
              },
              {
                "id": "U_00BA",
                "text": "\u00BA"
              },
              {
                "id": "U_00B6",
                "text": "\u00B6"
              },
              {
                "id": "U_00A7",
                "text": "\u00A7"
              },
              {
                "id": "U_00B1",
                "text": "\u00B1"
              },
              {
                "id": "U_00D7",
                "text": "\u00D7"
              },
              {
                "id": "U_00F7",
                "text": "\u00F7"
              },
              {
                "id": "U_00A6",
                "text": "\u00A6"
              },
              {
                "id": "U_00B0",
                "text": "\u00B0"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "id": "U_00B5",
                "text": "\u00B5"
              },
              {
                "id": "U_00A9",
                "text": "\u00A9"
              },
              {
                "id": "U_00AE",
                "text": "\u00AE"
              },
              {
                "id": "U_00A3",
                "text": "\u00A3"
              },
              {
                "id": "U_20AC",
                "text": "\u20AC"
              },
              {
                "id": "U_00A5",
                "text": "\u00A5"
              },
              {
                "id": "U_2022",
                "text": "\u2022"
              },
              {
                "id": "U_00B7",
                "text": "\u00B7"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="16.0.144.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 17
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4030 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 15
        k.KDC(0,t);
        k.KO(-1,t,"Ē");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.CTRL | modCodes.VIRTUAL_KEY /* 0x4020 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 16
        k.KDC(0,t);
        k.KO(-1,t,"ē");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    return r;
  };
}
