
var character_creation_state = {
    bonus_xp: 0,

    characteristics_ws_initial      : 0,
    characteristics_bs_initial      : 0,
    characteristics_s_initial       : 0,
    characteristics_t_initial       : 0,
    characteristics_i_initial       : 0,
    characteristics_ag_initial      : 0,
    characteristics_dex_initial     : 0,
    characteristics_int_initial     : 0,
    characteristics_wp_initial      : 0,
    characteristics_fel_initial     : 0,
    characteristics_ws_advances     : 0,
    characteristics_bs_advances     : 0,
    characteristics_s_advances      : 0,
    characteristics_t_advances      : 0,
    characteristics_i_advances      : 0,
    characteristics_ag_advances     : 0,
    characteristics_dex_advances    : 0,
    characteristics_int_advances    : 0,
    characteristics_wp_advances     : 0,
    characteristics_fel_advances    : 0,
    fate_fate                       : 0,
    fate_fortune                    : 0,
    resilience_resilience           : 0,
    resilience_resolve              : 0,
    movement_movement               : 0,
    wounds                          : 0,
    skills: [],
    skills_species: {

    },
    talents: [],
    character_creation_step: 0,
    class_selection_random: 0,
    characteristics_selection_random: 0,
    movement: {
        0: {'walk': 0,"run": 0},
        3: {'walk': 6,"run": 12},
        4: {'walk': 8,"run": 16},
        5: {'walk': 10,"run": 20},
    },

    avalible_attribute_points       : 100,
    extra_points                    : 0,
}



const character_creation_steps = ["step_1_species", "step_2_class", "step_3_characteristics", 'step_4_species_skills']
const character_creation_steps_header = ["Species", "Class", "Characteristics", "Species Skills"]

function species_change() {
    $.ajaxSetup({
        headers: { "X-CSRFToken": getCookie("csrftoken") }
    });
    val = $(this).find(":selected").val()
    characer_id = $("input[name='characer_id']").val()

    $.ajax({
        type: "POST",
        url: "ajax_save_character_species",
        data: {
            characer_id: characer_id,
            species_id: val
        },
        success: function(data) {
            console.log("hair:" + data['hair'] + " eyes:"+ data['eyes'])

            $("select#species").val(data['species_id']);
            character_creation_state['bonus_xp'] = 0;

            $("select#hair").empty()
            $("select#eyes").empty()

            $.each(character_creation_state['RandomHairTable'][val], function(i, item) {
                console.log(item)
                $("select#hair").append($('<option>', {value: item.val, text: item.name}))
            });
            $.each(character_creation_state['RandomEyesTable'][val], function(i, item) {
                $("select#eyes").append($('<option>', {value: item.val, text: item.name}))
            });
            character_creation_state['skills'] = []
            $("table#skills_table tr.block_body").remove()
            $.each(data['species_skills'], function(i, item) {
                character_creation_state['skills'].push(item)
            })
            fill_species_skills_select();

            $("table#talents_table tr.block_body").remove()
            $.each(data['species_tallents'], function(i, item) {
                character_creation_state['talents'].push(item)
            })

            $("input#age").val(data['age'])
            $("input#height").val(data['height'])
            $("select#hair").val(data['hair'])
            $("select#eyes").val(data['eyes'])
        }
    });
}

function randomSpecies() {
    $.ajaxSetup({
        headers: { "X-CSRFToken": getCookie("csrftoken") }
    });

    characer_id = $("input[name='characer_id']").val()

    $.ajax({
        type: "POST",
        url: "ajax_randomSpecies",
        data: {
            characer_id: characer_id,

        },
        success: function(data) {
            console.log("hair:" + data['hair'] + " eyes:"+ data['eyes'])

            $("select#species").val(data['species_id']);
            character_creation_state['bonus_xp'] = 20;

            species_val = $("select#species").val();
            $("select#hair").empty()
            $("select#eyes").empty()

            $.each(character_creation_state['RandomHairTable'][species_val], function(i, item) {
                $("select#hair").append($('<option>', {value: item.val, text: item.name}))
            });
            $.each(character_creation_state['RandomEyesTable'][species_val], function(i, item) {
                $("select#eyes").append($('<option>', {value: item.val, text: item.name}))
            });
            character_creation_state['skills'] = []
            $("table#skills_table tr.block_body").remove()
            $.each(data['species_skills'], function(i, item) {
                character_creation_state['skills'].push(item)
            })
            fill_species_skills_select();

            character_creation_state['talents'] = []
            $("table#talents_table tr.block_body").remove()
            $.each(data['species_tallents'], function(i, item) {
                character_creation_state['talents'].push(item)
            })


            $("input#age").val(data['age'])
            $("input#height").val(data['height'])
            $("select#hair").val(data['hair'])
            $("select#eyes").val(data['eyes'])
            $("input#character_sheet_name").val(data['name'])
            $("input#character_sheet_name_1").val(data['name'])
        }
    });
}

function updateCharacterState() {
    $("input#experience_current").val(character_creation_state['bonus_xp']);

    $("input#characteristics_ws_initial"  ).val(character_creation_state["characteristics_ws_initial" ])
    $("input#characteristics_bs_initial"  ).val(character_creation_state["characteristics_bs_initial" ])
    $("input#characteristics_s_initial"   ).val(character_creation_state["characteristics_s_initial"  ])
    $("input#characteristics_t_initial"   ).val(character_creation_state["characteristics_t_initial"  ])
    $("input#characteristics_i_initial"   ).val(character_creation_state["characteristics_i_initial"  ])
    $("input#characteristics_ag_initial"  ).val(character_creation_state["characteristics_ag_initial" ])
    $("input#characteristics_dex_initial" ).val(character_creation_state["characteristics_dex_initial"])
    $("input#characteristics_int_initial" ).val(character_creation_state["characteristics_int_initial"])
    $("input#characteristics_wp_initial"  ).val(character_creation_state["characteristics_wp_initial" ])
    $("input#characteristics_fel_initial" ).val(character_creation_state["characteristics_fel_initial"])

    $("input#characteristics_ws_advances"  ).val(character_creation_state["characteristics_ws_advances" ])
    $("input#characteristics_bs_advances"  ).val(character_creation_state["characteristics_bs_advances" ])
    $("input#characteristics_s_advances"   ).val(character_creation_state["characteristics_s_advances"  ])
    $("input#characteristics_t_advances"   ).val(character_creation_state["characteristics_t_advances"  ])
    $("input#characteristics_i_advances"   ).val(character_creation_state["characteristics_i_advances"  ])
    $("input#characteristics_ag_advances"  ).val(character_creation_state["characteristics_ag_advances" ])
    $("input#characteristics_dex_advances" ).val(character_creation_state["characteristics_dex_advances"])
    $("input#characteristics_int_advances" ).val(character_creation_state["characteristics_int_advances"])
    $("input#characteristics_wp_advances"  ).val(character_creation_state["characteristics_wp_advances" ])
    $("input#characteristics_fel_advances" ).val(character_creation_state["characteristics_fel_advances"])

    $("input#characteristics_ws_current"  ).val(character_creation_state["characteristics_ws_initial" ] + character_creation_state["characteristics_ws_advances" ] )
    $("input#characteristics_bs_current"  ).val(character_creation_state["characteristics_bs_initial" ] + character_creation_state["characteristics_bs_advances" ] )
    $("input#characteristics_s_current"   ).val(character_creation_state["characteristics_s_initial"  ] + character_creation_state["characteristics_s_advances"  ] )
    $("input#characteristics_t_current"   ).val(character_creation_state["characteristics_t_initial"  ] + character_creation_state["characteristics_t_advances"  ] )
    $("input#characteristics_i_current"   ).val(character_creation_state["characteristics_i_initial"  ] + character_creation_state["characteristics_i_advances"  ] )
    $("input#characteristics_ag_current"  ).val(character_creation_state["characteristics_ag_initial" ] + character_creation_state["characteristics_ag_advances" ] )
    $("input#characteristics_dex_current" ).val(character_creation_state["characteristics_dex_initial"] + character_creation_state["characteristics_dex_advances"] )
    $("input#characteristics_int_current" ).val(character_creation_state["characteristics_int_initial"] + character_creation_state["characteristics_int_advances"] )
    $("input#characteristics_wp_current"  ).val(character_creation_state["characteristics_wp_initial" ] + character_creation_state["characteristics_wp_advances" ] )
    $("input#characteristics_fel_current" ).val(character_creation_state["characteristics_fel_initial"] + character_creation_state["characteristics_fel_advances"] )
    $("input#fate_fate"                   ).val(character_creation_state["fate_fate"] )
    $("input#fate_fortune"                ).val(character_creation_state["fate_fortune"] )
    $("input#resilience_resilience"       ).val(character_creation_state["resilience_resilience"] )
    $("input#resilience_resolve"          ).val(character_creation_state["resilience_resolve"] )
    $("input#movement_movement"           ).val(character_creation_state["movement_movement"] )
    $("input#movement_walk"               ).val(character_creation_state['movement'][character_creation_state["movement_movement"]]['walk'])
    $("input#movement_run"                ).val(character_creation_state['movement'][character_creation_state["movement_movement"]]['run'])
    $("input#wounds"                      ).val(character_creation_state["wounds"] )
    $("span#avalible_attribute_points"    ).text(character_creation_state["avalible_attribute_points"] )
    $("span#avalible_extra_points"        ).text(character_creation_state["extra_points"] )

    $.each(character_creation_state['skills'], function(i, item) {
        if(!$('#skills_adv__'+item.id).length && !$('#skills_characteristics__'+item.id).length) {
            new_row = '<tr class="block_body">'
            new_row += '<td id="skills_name__'+item.id+'" class="left">'+item.name+'</td>'
            new_row += '<td class="characteristics">'+item.characteristics+'</td>'
            new_row += '<td class="edit"><input type="text" id="skills_characteristics__'+item.id+'" name="fname"></td>'
            new_row += '<td class="edit"><input type="text" id="skills_adv__'+item.id+'" name="fname"></td>'
            new_row += '<td class="edit"><input type="text" id="skills__'+item.id+'" name="fname"></td>'
            new_row += '</tr>'
            $("#skills_table").append(new_row)
        }

        skill_char =character_creation_state["characteristics_"+item.characteristics.toLowerCase()+"_initial" ] + character_creation_state["characteristics_"+item.characteristics.toLowerCase()+"_advances"]
        $('#skills_characteristics__'+item.id).val(skill_char)
        $('#skills_adv__'+item.id).val(item.adv)
        $('#skills__'+item.id).val(skill_char + item.adv)
        if(character_creation_state['character_creation_step'] == 3 && item.type == "species_skill"){
            $('#skills_name__'+item.id).css("font-weight","Bold");
        } else {
            $('#skills_name__'+item.id).css("font-weight","Normal");
        }
    });

    $.each(character_creation_state['talents'], function(i, item) {
        if(!$('#talents_adv__'+item.id).length && !$('#skills_characteristics__'+item.id).length) {
            console.log()
            new_row = '<tr class="block_body">'
            new_row += '<td id="talents_name__'+item.id+'" class="left">'+item.name+'</td>'
            new_row += '<td class="edit"><input type="text" id="talents_adv__'+item.id+'" name="fname"></td>'
            new_row += '<td class="description">'+item.description+'</td>'
            new_row += '</tr>'
            $("#talents_table").append(new_row)
        }
    });
}


function nextStep() {
    console.log("div#"+ character_creation_steps[character_creation_state['character_creation_step']]);
    $("div#"+ character_creation_steps[character_creation_state['character_creation_step']]).hide(200);
    character_creation_state['character_creation_step']++
    $("div#"+ character_creation_steps[character_creation_state['character_creation_step']]).show(200);
    $("div.create_character div.header h1").text(character_creation_steps_header[character_creation_state['character_creation_step']])
    if(character_creation_state['character_creation_step'] == 3) {
        fill_species_skills_select();
    }
}

function fill_species_skills_select() {
    $("select#species_skills_5_1 option").remove()
    $("select#species_skills_5_2 option").remove()
    $("select#species_skills_5_3 option").remove()
    $("select#species_skills_3_1 option").remove()
    $("select#species_skills_3_2 option").remove()
    $("select#species_skills_3_3 option").remove()
    $.each(character_creation_state['skills'], function (i, item) {
        if (character_creation_state['character_creation_step'] == 3 && item.type == "species_skill") {
            $("select#species_skills_5_1").append($('<option>', { value: item.id, text: item.name }));
            $("select#species_skills_5_2").append($('<option>', { value: item.id, text: item.name }));
            $("select#species_skills_5_3").append($('<option>', { value: item.id, text: item.name }));
            $("select#species_skills_3_1").append($('<option>', { value: item.id, text: item.name }));
            $("select#species_skills_3_2").append($('<option>', { value: item.id, text: item.name }));
            $("select#species_skills_3_3").append($('<option>', { value: item.id, text: item.name }));
        }
    });
}

function randomClass() {
    if(character_creation_state['class_selection_random'] == 0) {
        character_creation_state['bonus_xp'] += 50
        character_creation_state['class_selection_random']++
    }
    else if(character_creation_state['class_selection_random'] == 1) {
        character_creation_state['bonus_xp'] -= 50
        character_creation_state['bonus_xp'] += 25
        character_creation_state['class_selection_random']++
    }
    else if(character_creation_state['class_selection_random'] == 2) {
        character_creation_state['bonus_xp'] -= 25
        character_creation_state['bonus_xp'] += 0
        character_creation_state['class_selection_random'] = 3
    }

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_randomClass",
        data: {
            characer_id: characer_id,
        },
        success: function(data) {
            $("input#carrer").val(data['career_name']);
            $("input#class").val(data['ch_class_name']);
        }
    });
}

function saveName(e) {
    n = $("input#character_sheet_name").val();

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveName",
        data: {
            characer_id: characer_id,
            name: n,
        },
        success: function(data) {
        }
    });
}
function saveAge(e) {
    n = parseInt($("input#age").val());

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveAge",
        data: {
            characer_id: characer_id,
            age: n,
        },
        success: function(data) {
        }
    });
}
function saveHeight(e) {
    n = parseInt($("input#height").val());

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveHeight",
        data: {
            characer_id: characer_id,
            height: n,
        },
        success: function(data) {
        }
    });
}
function saveHair(e) {
    n = $('select#hair').find(":selected").val()

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveHair",
        data: {
            characer_id: characer_id,
            hair: n,
        },
        success: function(data) {
        }
    });
}
function saveEyes(e) {
    n = $('select#eyes').find(":selected").val()

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveEyes",
        data: {
            characer_id: characer_id,
            eyes: n,
        },
        success: function(data) {
        }
    });
}

function attributes() {
    console.log("attributes")

    if(character_creation_state['characteristics_selection_random'] == 0) {
        character_creation_state['bonus_xp'] += 50
        character_creation_state['characteristics_selection_random']++
    }
    else if(character_creation_state['characteristics_selection_random'] == 1) {
        character_creation_state['bonus_xp'] -= 50
        character_creation_state['bonus_xp'] += 25
        character_creation_state['characteristics_selection_random']++
    }
    else if(character_creation_state['characteristics_selection_random'] == 2) {
        character_creation_state['bonus_xp'] -= 25
        character_creation_state['bonus_xp'] += 0
        character_creation_state['characteristics_selection_random'] = 3
    }

    if(character_creation_state['characteristics_selection_random'] == 4) {
        return;
    }

    if(character_creation_state['characteristics_selection_random'] == 3) {
        var quantity = jQuery('.quantity input').each( function() {
            jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up" onClick="btnUp(\''+this.id+'\')">&#xf106;</button><button class="quantity-button quantity-down" onClick="btnDown(\''+this.id+'\')">&#xf107</button></div>').insertAfter(this)
          });
        character_creation_state['characteristics_selection_random'] = 4
        species = $("select#species").val()
        console.log(species)
        character_creation_state['characteristics_ws_initial'   ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_ws_initial'   ];
        character_creation_state['characteristics_bs_initial'   ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_bs_initial'   ];
        character_creation_state['characteristics_s_initial'    ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_s_initial'    ];
        character_creation_state['characteristics_t_initial'    ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_t_initial'    ];
        character_creation_state['characteristics_i_initial'    ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_i_initial'    ];
        character_creation_state['characteristics_ag_initial'   ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_ag_initial'   ];
        character_creation_state['characteristics_dex_initial'  ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_dex_initial'  ];
        character_creation_state['characteristics_int_initial'  ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_int_initial'  ];
        character_creation_state['characteristics_wp_initial'   ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_wp_initial'   ];
        character_creation_state['characteristics_fel_initial'  ] = 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_fel_initial'  ];

        $('input#characteristics_ws_initial'   ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_ws_initial'   ]);
        $('input#characteristics_bs_initial'   ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_bs_initial'   ]);
        $('input#characteristics_s_initial'    ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_s_initial'    ]);
        $('input#characteristics_t_initial'    ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_t_initial'    ]);
        $('input#characteristics_i_initial'    ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_i_initial'    ]);
        $('input#characteristics_ag_initial'   ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_ag_initial'   ]);
        $('input#characteristics_dex_initial'  ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_dex_initial'  ]);
        $('input#characteristics_int_initial'  ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_int_initial'  ]);
        $('input#characteristics_wp_initial'   ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_wp_initial'   ]);
        $('input#characteristics_fel_initial'  ).attr('min', 4 + character_creation_state['RandomAttributesTable'][species]['characteristics_fel_initial'  ]);
        $('input#characteristics_ws_initial'   ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_ws_initial'   ]);
        $('input#characteristics_bs_initial'   ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_bs_initial'   ]);
        $('input#characteristics_s_initial'    ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_s_initial'    ]);
        $('input#characteristics_t_initial'    ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_t_initial'    ]);
        $('input#characteristics_i_initial'    ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_i_initial'    ]);
        $('input#characteristics_ag_initial'   ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_ag_initial'   ]);
        $('input#characteristics_dex_initial'  ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_dex_initial'  ]);
        $('input#characteristics_int_initial'  ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_int_initial'  ]);
        $('input#characteristics_wp_initial'   ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_wp_initial'   ]);
        $('input#characteristics_fel_initial'  ).attr('max', 18 + character_creation_state['RandomAttributesTable'][species]['characteristics_fel_initial'  ]);

        character_creation_state['avalible_attribute_points'] =  character_creation_state['avalible_attribute_points'] - 40;

        return;
    }

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveAttributes",
        data: {
            characer_id: characer_id,
        },
        success: function(data) {
            data['extra_points'];
            character_creation_state['characteristics_ws_initial']  = data['characteristics_ws_initial'];
            character_creation_state['characteristics_bs_initial']  = data['characteristics_bs_initial'];
            character_creation_state['characteristics_s_initial']   = data['characteristics_s_initial'];
            character_creation_state['characteristics_t_initial']   = data['characteristics_t_initial'];
            character_creation_state['characteristics_i_initial']   = data['characteristics_i_initial'];
            character_creation_state['characteristics_ag_initial']  = data['characteristics_ag_initial'];
            character_creation_state['characteristics_dex_initial'] = data['characteristics_dex_initial'];
            character_creation_state['characteristics_int_initial'] = data['characteristics_int_initial'];
            character_creation_state['characteristics_wp_initial']  = data['characteristics_wp_initial'];
            character_creation_state['characteristics_fel_initial'] = data['characteristics_fel_initial'];
            character_creation_state['fate_fate']                   = data['fate_fate'];
            character_creation_state['fate_fortune']                = data['fate_fortune'];
            character_creation_state['resilience_resilience']       = data['resilience_resilience'];
            character_creation_state['resilience_resolve']          = data['resilience_resolve'];
            character_creation_state['movement_movement']           = data['movement_movement'];
            character_creation_state['wounds']                      = data['wounds'];
            character_creation_state['extra_points']                = data['extra_points'];
        }
    });
}

function btnUp(input_id) {
    if(character_creation_state['avalible_attribute_points'] <= 0) {
        return
    }

    inp = $('input#'+input_id);
    max = parseInt(inp.attr('max'));
    min = parseInt(inp.attr('min'));
    step = parseInt(inp.attr('step'));
    oldValue = parseInt(inp.val());



    if ((oldValue + step) > max) {
        return
    } else {
      var newVal = oldValue + step;
    }

    console.log("btnUp: input_id="+input_id+"; min="+min + "; max="+max+"; step="+step+"; oldVal="+oldValue+"; newVal="+newVal);
    character_creation_state[input_id]  = newVal
    inp.val(newVal);
    inp.trigger("change");

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveAttribute",
        data: {
            characer_id: characer_id,
            input_id: input_id,
            'newVal': {
                'characteristics_ws_initial'    : $('input#characteristics_ws_initial'  ).val(),
                'characteristics_bs_initial'    : $('input#characteristics_bs_initial'  ).val(),
                'characteristics_s_initial'     : $('input#characteristics_s_initial'   ).val(),
                'characteristics_t_initial'     : $('input#characteristics_t_initial'   ).val(),
                'characteristics_i_initial'     : $('input#characteristics_i_initial'   ).val(),
                'characteristics_ag_initial'    : $('input#characteristics_ag_initial'  ).val(),
                'characteristics_dex_initial'   : $('input#characteristics_dex_initial' ).val(),
                'characteristics_int_initial'   : $('input#characteristics_int_initial' ).val(),
                'characteristics_wp_initial'    : $('input#characteristics_wp_initial'  ).val(),
                'characteristics_fel_initial'   : $('input#characteristics_fel_initial' ).val()
            }
        },
        success: function(data) {
            console.log(data)
            character_creation_state['characteristics_ws_initial']  = data['characteristics_ws_initial'];
            character_creation_state['characteristics_bs_initial']  = data['characteristics_bs_initial'];
            character_creation_state['characteristics_s_initial']   = data['characteristics_s_initial'];
            character_creation_state['characteristics_t_initial']   = data['characteristics_t_initial'];
            character_creation_state['characteristics_i_initial']   = data['characteristics_i_initial'];
            character_creation_state['characteristics_ag_initial']  = data['characteristics_ag_initial'];
            character_creation_state['characteristics_dex_initial'] = data['characteristics_dex_initial'];
            character_creation_state['characteristics_int_initial'] = data['characteristics_int_initial'];
            character_creation_state['characteristics_wp_initial']  = data['characteristics_wp_initial'];
            character_creation_state['characteristics_fel_initial'] = data['characteristics_fel_initial'];
            character_creation_state['fate_fate']                   = data['fate_fate'];
            character_creation_state['fate_fortune']                = data['fate_fortune'];
            character_creation_state['resilience_resilience']       = data['resilience_resilience'];
            character_creation_state['resilience_resolve']          = data['resilience_resolve'];
            character_creation_state['movement_movement']           = data['movement_movement'];
            character_creation_state['wounds']                      = data['wounds'];
            character_creation_state['avalible_attribute_points']--
        }
    });

  }

function btnDown(input_id) {
    if(character_creation_state['avalible_attribute_points'] >= 60) {
        return
    }
    inp = $('input#'+input_id);
    max = parseInt(inp.attr('max'));
    min = parseInt(inp.attr('min'));
    step = parseInt(inp.attr('step'));
    oldValue = parseInt(inp.val());

    if ((oldValue - step) < min) {
      return
    } else {
      var newVal = oldValue - step;
    }

    console.log("btnDown: input_id="+input_id+"; min="+min + "; max="+max+"; step="+step+"; oldVal="+oldValue+"; newVal="+newVal);
    character_creation_state[input_id]  = newVal
    inp.val(newVal);
    inp.trigger("change");

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveAttribute",
        data: {
            characer_id: characer_id,
            input_id: input_id,
            'newVal': {
                'characteristics_ws_initial'    : $('input#characteristics_ws_initial'  ).val(),
                'characteristics_bs_initial'    : $('input#characteristics_bs_initial'  ).val(),
                'characteristics_s_initial'     : $('input#characteristics_s_initial'   ).val(),
                'characteristics_t_initial'     : $('input#characteristics_t_initial'   ).val(),
                'characteristics_i_initial'     : $('input#characteristics_i_initial'   ).val(),
                'characteristics_ag_initial'    : $('input#characteristics_ag_initial'  ).val(),
                'characteristics_dex_initial'   : $('input#characteristics_dex_initial' ).val(),
                'characteristics_int_initial'   : $('input#characteristics_int_initial' ).val(),
                'characteristics_wp_initial'    : $('input#characteristics_wp_initial'  ).val(),
                'characteristics_fel_initial'   : $('input#characteristics_fel_initial' ).val()
            }
        },
        success: function(data) {
            character_creation_state['characteristics_ws_initial']  = data['characteristics_ws_initial'];
            character_creation_state['characteristics_bs_initial']  = data['characteristics_bs_initial'];
            character_creation_state['characteristics_s_initial']   = data['characteristics_s_initial'];
            character_creation_state['characteristics_t_initial']   = data['characteristics_t_initial'];
            character_creation_state['characteristics_i_initial']   = data['characteristics_i_initial'];
            character_creation_state['characteristics_ag_initial']  = data['characteristics_ag_initial'];
            character_creation_state['characteristics_dex_initial'] = data['characteristics_dex_initial'];
            character_creation_state['characteristics_int_initial'] = data['characteristics_int_initial'];
            character_creation_state['characteristics_wp_initial']  = data['characteristics_wp_initial'];
            character_creation_state['characteristics_fel_initial'] = data['characteristics_fel_initial'];
            character_creation_state['fate_fate']                   = data['fate_fate'];
            character_creation_state['fate_fortune']                = data['fate_fortune'];
            character_creation_state['resilience_resilience']       = data['resilience_resilience'];
            character_creation_state['resilience_resolve']          = data['resilience_resolve'];
            character_creation_state['movement_movement']           = data['movement_movement'];
            character_creation_state['wounds']                      = data['wounds'];
            character_creation_state['avalible_attribute_points']++
        }
    });
  }

  function btnUpFate(input_id) {
    if(character_creation_state['extra_points'] <= 0) {
        console.error("btnUpFate: " + character_creation_state['extra_points'] + " <= 0" )
        return
    }

    inp = $('input#'+input_id);
    max = parseInt(inp.attr('max'));
    min = parseInt(inp.attr('min'));
    step = parseInt(inp.attr('step'));
    oldValue = parseInt(inp.val());

    if ((oldValue + step) > max) {
        console.error("btnUpFate: (oldValue + step) > max" )
      return
    } else {
      var newVal = oldValue + step;
    }

    character_creation_state[input_id]  = newVal
    inp.val(newVal);
    inp.trigger("change");

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveFate_and_fortune",
        data: {
            characer_id: characer_id,
            input_id: input_id,
            'newVal': {
                'fate_fate'    : $('input#fate_fate'  ).val(),
                'fate_fortune'    : $('input#fate_fortune'  ).val(),
            }
        },
        success: function(data) {
            character_creation_state['fate_fate']  = data['fate_fate'];
            character_creation_state['fate_fortune']  = data['fate_fortune'];
            character_creation_state['extra_points']--
        }
    });

  }

function btnDownFate(input_id) {
    if(character_creation_state['extra_points'] >= 3) {
        console.error("btnUpFate: " + character_creation_state['extra_points'] + " >= 3" )
        return
    }
    inp = $('input#'+input_id);
    max = parseInt(inp.attr('max'));
    min = parseInt(inp.attr('min'));
    step = parseInt(inp.attr('step'));
    oldValue = parseInt(inp.val());

    if ((oldValue - step) < min) {
        console.error("btnDownFate: (oldValue["+oldValue+"] - step["+step+"]) < min["+min+"]" )
      return
    } else {
      var newVal = oldValue - step;
    }

    character_creation_state[input_id]  = newVal
    inp.val(newVal);
    inp.trigger("change");

    characer_id = $("input[name='characer_id']").val()
    $.ajax({
        type: "POST",
        url: "ajax_saveFate_and_fortune",
        data: {
            characer_id: characer_id,
            input_id: input_id,
            'newVal': {
                'fate_fate'     : $('input#fate_fate').val(),
                'fate_fortune'  : $('input#fate_fortune').val(),
            }
        },
        success: function(data) {
            character_creation_state['fate_fate']  = data['fate_fate'];
            character_creation_state['fate_fortune']  = data['fate_fortune'];
            character_creation_state['extra_points']++
        }
    });
  }

function getRandomAttributesTable() {
    $.ajax({
        type: "POST",
        url: "ajax_getRandomAttributesTable",
        data: {
        },
        success: function(data) {
            console.log(data)
            character_creation_state['RandomAttributesTable'] = data['attributesTable']
            character_creation_state['RandomHairTable'] = data['hairTable']
            character_creation_state['RandomEyesTable'] = data['eyesTable']
            console.log(character_creation_state)
        }
    });
}



function saveSkillAdv(eventData, points) {
    new_adv_id = $(eventData.currentTarget).val()
    old_skill_adv = character_creation_state['skills_species'][eventData.currentTarget.id]
    console.log(old_skill_adv)
    character_creation_state['skills_species'][eventData.currentTarget.id] = new_adv_id
    $.each(character_creation_state['skills'], function(i, item) {
        if(item.id == old_skill_adv) {
            item.adv = 0
        }
        if(item.id == new_adv_id) {
            item.adv = points
            characer_id = $("input[name='characer_id']").val()
            $.ajax({
                type: "POST",
                url: "ajax_saveSkillAdv",
                data: {
                    characer_id: characer_id,
                    skill_id: new_adv_id,
                    points: points,
                    old_skill_adv: old_skill_adv
                },
                success: function(data) {
                }
            });
        }
    });
}
function saveSkillAdv5(eventData) {
    saveSkillAdv(eventData, 5);
}

function saveSkillAdv3(eventData) {
    saveSkillAdv(eventData, 3);
}

function main() {
    $.ajaxSetup({
        headers: { "X-CSRFToken": getCookie("csrftoken") }
    });

    getRandomAttributesTable();
    var quantity = jQuery('.quantity_fate input').each( function() {
        jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up" onClick="btnUpFate(\''+this.id+'\')">&#xf106;</button><button class="quantity-button quantity-down" onClick="btnDownFate(\''+this.id+'\')">&#xf107</button></div>').insertAfter(this)
    });

    $("select#species").on("change", species_change);
    $("img#img_character_creaton_next").click(nextStep);

    $("img#img_random_species").click(randomSpecies);
    $("div#"+ character_creation_steps[0]).show();
    $("img#img_random_class").click(randomClass);
    $("input#character_sheet_name").keyup(saveName);

    $("input#age").keyup(saveAge);
    $("input#height").keyup(saveHeight);
    $("select#hair").on("change", saveHair);
    $("select#eyes").on("change", saveEyes);

    var eventData5_1
    var eventData5_2
    var eventData5_3
    var eventData3_1
    var eventData3_2
    var eventData3_3

    $("select#species_skills_5_1").on("change", eventData5_1, saveSkillAdv5);
    $("select#species_skills_5_2").on("change", eventData5_2, saveSkillAdv5);
    $("select#species_skills_5_3").on("change", eventData5_3, saveSkillAdv5);
    $("select#species_skills_3_1").on("change", eventData3_1, saveSkillAdv3);
    $("select#species_skills_3_2").on("change", eventData3_2, saveSkillAdv3);
    $("select#species_skills_3_3").on("change", eventData3_3, saveSkillAdv3);

    $("img#img_random_characteristics").click(attributes);

    setInterval(updateCharacterState, 100);
}
