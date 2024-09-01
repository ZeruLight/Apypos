import { Request, Response } from "express";

import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import User from "../model/user";

export const registerAccount = async (req: Request, res: Response) => {


  const uu_id = req.body.uu_id
  const secret_id = req.body.secret_id
  //TODO: Generate random login,user and game ids
  const newUser = new User({
    uu_id: uu_id,
    secret_id: secret_id,
    login_id: "login_id_on_reg",
    user_id: "user_id_on_reg",
    game_id: "83R552F3",
    current_session: "session_id",
    tutorial_step: 110,
  });

  await newUser.save();


  const responseData = {
    game_id: newUser.game_id,
    is_review: 0,
    login_id: newUser.login_id,

    stretch_effect_info: {
      exchange_present: 1,
      free_auto_add: 2,
      free_auto_infinity: 3,
      increase_add: 4,
      increase_inf: 5,
      mst_event_info_id: 1,
      time_info: {
        exchange_present: {
          end: 1,
          end_remain: 456,
          start: 0,
          start_remain: 789
        },
        free_auto_add: {
          end: 1,
          end_remain: 101,
          start: 0,
          start_remain: 112
        },
        free_auto_infinity: {
          end: 0,
          end_remain: 113,
          start: 1,
          start_remain: 114
        },
        increase_add: {
          end: 1,
          end_remain: 115,
          start: 0,
          start_remain: 116
        }
      }
    },
    tutorial_step: newUser.tutorial_step,
    user_id: newUser.user_id
  };


  console.log(`TutorialStepUp: ${responseData.tutorial_step}`);

  encryptAndSend(responseData, res, req);

};

export const loginAccount = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };

  const doc = await User.findOne(filter);

  //LOGIN IS MASSIVE REDO THIS NEEDS typing using the ::setup()
  const login = {
    auto_course_remain_time: 0,
    event_login_bonus_info: {
      banner_path: "asev_00010",
      day: 1,
      disp_name: "event_login_bonus_info",
      end: "2025/12/30 00:05:00",
      login_bonus_reward_list: [
        {
          idx: 1,
          item_list: {
            collections: [
              { mst_collection_id: 0 }
            ],
            equipments: [
              {
                auto_potential_composite: 0,
                awaked: 0,
                created: 0,
                elv: 0,
                endAwakeCount: 0,
                endAwakeRemain: 0,
                end_remain: 0,
                equipment_id: "",
                evolve_start_time: 0,
                favorite: 0,
                is_awake: 0,
                is_complete_auto_potential_composite: 0,
                mst_equipment_id: 0,
                potential: 0,
                slv: 0,
                start_remain: 0

              }
            ],
            growth_items: [{
              amount: 0,
              mst_growth_item_id: 0
            }],
            katamaris: [
              {
                mst_katamari_type_id: 0,
                equipments: [
                  {
                    auto_potential_composite: 0,
                    awaked: 0,
                    created: 0,
                    elv: 0,
                    endAwakeCount: 0,
                    endAwakeRemain: 0,
                    end_remain: 0,
                    equipment_id: "",
                    evolve_start_time: 0,
                    favorite: 0,
                    is_awake: 0,
                    is_complete_auto_potential_composite: 0,
                    mst_equipment_id: 0,
                    potential: 0,
                    slv: 0,
                    start_remain: 0
                  }
                ]
              }
            ],
            limiteds: [{
              amount: 0,
              mst_limited_id: 0
            }
            ],
            matatabis: [{
              amount: 0,
              mst_matatabi_id: 0
            }],
            materials: [{
              amount: 0,
              mst_material_id: 0
            }],
            monument: {
              augite: [{
                amount: 0,
                mst_augite_id: 0,
                mst_monument_type_id: 0
              }],
              hr: 0,
              mlv: {
                atk: 1,
                def: 1,
                hp: 1,
                sp: 1
              }

            },
            otomos: [{
              created: 0,
              exp: 0,
              mst_otomo_id: 0,
              otomo_id: "",
              subskill: [
                0
              ]
            }],
            payments: [
              {
                amount: 0,
                mst_payment_id: 0
              }
            ],
            pcoins: [
              {
                amount: 0,
                mst_pcoin_id: 0
              }
            ],
            points: [
              {
                amount: 0,
                mst_event_point_id: 0
              }
            ],
            powers: [
              {
                amount: 0,
                mst_power_id: 0
              }
            ],
            stamp_sets: [
              {
                amount: 0,
                mst_stamp_set_id: 0
              }
            ],
            zenny: 0,
            pickup: 1

          }
        }
      ],
      message: "login",
      start: "1899/12/30 00:05:00",
    },
    game_id: doc.game_id,
    gender: doc.model_info.gender,
    is_review: 0,
    login_bonus_info: {
      day: 0,
      today_item_list: {
        item_list: {
          collections: [
            { mst_collection_id: 0 }
          ],
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 0,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ],
          growth_items: [{
            amount: 0,
            mst_growth_item_id: 0
          }],
          katamaris: [
            {
              mst_katamari_type_id: 0,
              equipments: [
                {
                  auto_potential_composite: 0,
                  awaked: 0,
                  created: 0,
                  elv: 0,
                  endAwakeCount: 0,
                  endAwakeRemain: 0,
                  end_remain: 0,
                  equipment_id: "",
                  evolve_start_time: 0,
                  favorite: 0,
                  is_awake: 0,
                  is_complete_auto_potential_composite: 0,
                  mst_equipment_id: 0,
                  potential: 0,
                  slv: 0,
                  start_remain: 0
                }
              ]
            }
          ],
          limiteds: [{
            amount: 0,
            mst_limited_id: 0
          }
          ],
          matatabis: [{
            amount: 0,
            mst_matatabi_id: 0
          }],
          materials: [{
            amount: 0,
            mst_material_id: 0
          }],
          monument: {
            augite: [{
              amount: 0,
              mst_augite_id: 0,
              mst_monument_type_id: 0
            }],
            hr: 0,
            mlv: {
              atk: 1,
              def: 1,
              hp: 1,
              sp: 1
            }

          },
          otomos: [{
            created: 0,
            exp: 0,
            mst_otomo_id: 0,
            otomo_id: "",
            subskill: [
              0
            ]
          }],
          payments: [
            {
              amount: 0,
              mst_payment_id: 0
            }
          ],
          pcoins: [
            {
              amount: 0,
              mst_pcoin_id: 0
            }
          ],
          points: [
            {
              amount: 0,
              mst_event_point_id: 0
            }
          ],
          powers: [
            {
              amount: 0,
              mst_power_id: 0
            }
          ],
          stamp_sets: [
            {
              amount: 0,
              mst_stamp_set_id: 0
            }
          ],
          zenny: 0,
          pickup: 0

        }
      },
      tomorrow_item_list: {
        item_list: {
          collections: [
            { mst_collection_id: 0 }
          ],
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 0,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ],
          growth_items: [{
            amount: 0,
            mst_growth_item_id: 0
          }],
          katamaris: [
            {
              mst_katamari_type_id: 0,
              equipments: [
                {
                  auto_potential_composite: 0,
                  awaked: 0,
                  created: 0,
                  elv: 0,
                  endAwakeCount: 0,
                  endAwakeRemain: 0,
                  end_remain: 0,
                  equipment_id: 0,
                  evolve_start_time: 0,
                  favorite: 0,
                  is_awake: 0,
                  is_complete_auto_potential_composite: 0,
                  mst_equipment_id: 0,
                  potential: 0,
                  slv: 0,
                  start_remain: 0
                }
              ]
            }
          ],
          limiteds: [{
            amount: 0,
            mst_limited_id: 0
          }
          ],
          matatabis: [{
            amount: 0,
            mst_matatabi_id: 0
          }],
          materials: [{
            amount: 0,
            mst_material_id: 0
          }],
          monument: {
            augite: [{
              amount: 0,
              mst_augite_id: 0,
              mst_monument_type_id: 0
            }],
            hr: 0,
            mlv: {
              atk: 1,
              def: 1,
              hp: 1,
              sp: 1
            }

          },
          otomos: [{
            created: 0,
            exp: 0,
            mst_otomo_id: 0,
            otomo_id: "",
            subskill: [
              0
            ]
          }],
          payments: [
            {
              amount: 0,
              mst_payment_id: 0
            }
          ],
          pcoins: [
            {
              amount: 0,
              mst_pcoin_id: 0
            }
          ],
          points: [
            {
              amount: 0,
              mst_event_point_id: 0
            }
          ],
          powers: [
            {
              amount: 0,
              mst_power_id: 0
            }
          ],
          stamp_sets: [
            {
              amount: 0,
              mst_stamp_set_id: 0
            }
          ],
          zenny: 0,
          pickup: 0

        }
      }
    },
    monthly_login_bonus_info: {
      day: 0,
      end: 0,
      login_bonus_reward_list: [{
        idx: 0,
        item_list: {
          collections: [
            { mst_collection_id: 0 }
          ],
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 0,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ],
          growth_items: [{
            amount: 0,
            mst_growth_item_id: 0
          }],
          katamaris: [
            {
              mst_katamari_type_id: 0,
              equipments: [
                {
                  auto_potential_composite: 0,
                  awaked: 0,
                  created: 0,
                  elv: 0,
                  endAwakeCount: 0,
                  endAwakeRemain: 0,
                  end_remain: 0,
                  equipment_id: "",
                  evolve_start_time: 0,
                  favorite: 0,
                  is_awake: 0,
                  is_complete_auto_potential_composite: 0,
                  mst_equipment_id: 0,
                  potential: 0,
                  slv: 0,
                  start_remain: 0
                }
              ]
            }
          ],
          limiteds: [{
            amount: 0,
            mst_limited_id: 0
          }
          ],
          matatabis: [{
            amount: 0,
            mst_matatabi_id: 0
          }],
          materials: [{
            amount: 0,
            mst_material_id: 0
          }],
          monument: {
            augite: [{
              amount: 0,
              mst_augite_id: 0,
              mst_monument_type_id: 0
            }],
            hr: 0,
            mlv: {
              atk: 1,
              def: 1,
              hp: 1,
              sp: 1
            }

          },
          otomos: [{
            created: 0,
            exp: 0,
            mst_otomo_id: 0,
            otomo_id: "",
            subskill: [
              0
            ]
          }],
          payments: [
            {
              amount: 0,
              mst_payment_id: 0
            }
          ],
          pcoins: [
            {
              amount: 0,
              mst_pcoin_id: 0
            }
          ],
          points: [
            {
              amount: 0,
              mst_event_point_id: 0
            }
          ],
          powers: [
            {
              amount: 0,
              mst_power_id: 0
            }
          ],
          stamp_sets: [
            {
              amount: 0,
              mst_stamp_set_id: 0
            }
          ],
          zenny: 0,
          pickup: 0

        }
      }],
      start: 0,
    },
    now_sale_premium_login_bonus_id: 0,
    popup_info: [{
      id: 1,
      url: "/popup1"
    },],
    premium_login_bonus_info: {
      banner_path: "",
      day: 0,
      disp_name: "",
      end: 0,
      latest_end_unix: 0,
      latest_mst_logbo_premium_id: 0,
      login_bonus_reward_list: [{
        idx: 0,
        item_list: {
          collections: [
            { mst_collection_id: 0 }
          ],
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 0,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ],
          growth_items: [{
            amount: 0,
            mst_growth_item_id: 0
          }],
          katamaris: [
            {
              mst_katamari_type_id: 0,
              equipments: [
                {
                  auto_potential_composite: 0,
                  awaked: 0,
                  created: 0,
                  elv: 0,
                  endAwakeCount: 0,
                  endAwakeRemain: 0,
                  end_remain: 0,
                  equipment_id: "",
                  evolve_start_time: 0,
                  favorite: 0,
                  is_awake: 0,
                  is_complete_auto_potential_composite: 0,
                  mst_equipment_id: 0,
                  potential: 0,
                  slv: 0,
                  start_remain: 0
                }
              ]
            }
          ],
          limiteds: [{
            amount: 0,
            mst_limited_id: 0
          }
          ],
          matatabis: [{
            amount: 0,
            mst_matatabi_id: 0
          }],
          materials: [{
            amount: 0,
            mst_material_id: 0
          }],
          monument: {
            augite: [{
              amount: 0,
              mst_augite_id: 0,
              mst_monument_type_id: 0
            }],
            hr: 0,
            mlv: {
              atk: 1,
              def: 1,
              hp: 1,
              sp: 1
            }

          },
          otomos: [{
            created: 0,
            exp: 0,
            mst_otomo_id: 0,
            otomo_id: "",
            subskill: [
              0
            ]
          }],
          payments: [
            {
              amount: 0,
              mst_payment_id: 0
            }
          ],
          pcoins: [
            {
              amount: 0,
              mst_pcoin_id: 0
            }
          ],
          points: [
            {
              amount: 0,
              mst_event_point_id: 0
            }
          ],
          powers: [
            {
              amount: 0,
              mst_power_id: 0
            }
          ],
          stamp_sets: [
            {
              amount: 0,
              mst_stamp_set_id: 0
            }
          ],
          zenny: 0,
          pickup: 0

        }
      }],
      message: "",
      start: "",
      term: 0
    },
    reserve_room_id: "test",
    return_login_bonus_info: {
      day: 0,
      end: "",
      login_bonus_reward_list: [
        {
          idx: 0,
          item_list: {
            collections: [
              { mst_collection_id: 0 }
            ],
            equipments: [
              {
                auto_potential_composite: 0,
                awaked: 0,
                created: 0,
                elv: 0,
                endAwakeCount: 0,
                endAwakeRemain: 0,
                end_remain: 0,
                equipment_id: "",
                evolve_start_time: 0,
                favorite: 0,
                is_awake: 0,
                is_complete_auto_potential_composite: 0,
                mst_equipment_id: 0,
                potential: 0,
                slv: 0,
                start_remain: 0

              }
            ],
            growth_items: [{
              amount: 0,
              mst_growth_item_id: 0
            }],
            katamaris: [
              {
                mst_katamari_type_id: 0,
                equipments: [
                  {
                    auto_potential_composite: 0,
                    awaked: 0,
                    created: 0,
                    elv: 0,
                    endAwakeCount: 0,
                    endAwakeRemain: 0,
                    end_remain: 0,
                    equipment_id: "",
                    evolve_start_time: 0,
                    favorite: 0,
                    is_awake: 0,
                    is_complete_auto_potential_composite: 0,
                    mst_equipment_id: 0,
                    potential: 0,
                    slv: 0,
                    start_remain: 0

                  }
                ]
              }
            ],
            limiteds: [{
              amount: 0,
              mst_limited_id: 0
            }
            ],
            matatabis: [{
              amount: 0,
              mst_matatabi_id: 0
            }],
            materials: [{
              amount: 0,
              mst_material_id: 0
            }],
            monument: {
              augite: [{
                amount: 0,
                mst_augite_id: 0,
                mst_monument_type_id: 0
              }],
              hr: 0,
              mlv: {
                atk: 1,
                def: 1,
                hp: 1,
                sp: 1
              }

            },
            otomos: [{
              created: 0,
              exp: 0,
              mst_otomo_id: 0,
              otomo_id: "",
              subskill: [
                0
              ]
            }],
            payments: [
              {
                amount: 0,
                mst_payment_id: 0
              }
            ],
            pcoins: [
              {
                amount: 0,
                mst_pcoin_id: 0
              }
            ],
            points: [
              {
                amount: 0,
                mst_event_point_id: 0
              }
            ],
            powers: [
              {
                amount: 0,
                mst_power_id: 0
              }
            ],
            stamp_sets: [
              {
                amount: 0,
                mst_stamp_set_id: 0
              }
            ],
            zenny: 0,
            pickup: 0

          }
        }
      ],
      start: "",

    },
    specific_popup_info: [
      {
      display_time: 1,
      id: 1,
      title: "Test",
      url: "/test",
    }
  ],
    stretch_effect_info: {
      exchange_present: 0,
      free_auto_add: 0,
      free_auto_infinity: 0,
      increase_add: 0,
      increase_inf: 0,
      mst_event_info_id: 1,
    },
    time_info: {
      exchange_present: {
        end: 0,
        end_remain: 0,
        start: 0,
        start_remain: 0,
      },
      free_auto_add: {
        end: 0,
        end_remain: 0,
        start: 0,
        start_remain: 0,
      },
      free_auto_infinity: {
        end: 0,
        end_remain: 0,
        start: 0,
        start_remain: 0,
      },
      increase_add: {
        end: 0,
        end_remain: 0,
        start: 0,
        start_remain: 0,
      },
    },
    tutorial_step: doc.tutorial_step, //HACK 310 (On start up this should be 110)
    user_id: doc.user_id,
  }


  console.log(`TutorialStepUp: ${login.tutorial_step}`);

  encryptAndSend(login, res, req);
};
