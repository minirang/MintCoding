{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "variables_set",
        "id": "NNVtvp4.pPU2*Rh:IDv.",
        "x": 190,
        "y": 70,
        "fields": {
          "VAR": {
            "id": "yl@$;J[F7Eh;?A6B?|Di"
          }
        },
        "inputs": {
          "VALUE": {
            "block": {
              "type": "math_number",
              "id": "Zb+#JCpf@7DTw7AOhUc.",
              "fields": {
                "NUM": 0
              }
            }
          }
        },
        "next": {
          "block": {
            "type": "keydown",
            "id": "QWFXyyjtm8va:z3QY%[/",
            "fields": {
              "KEY": "a"
            },
            "inputs": {
              "DO": {
                "block": {
                  "type": "controls_ifelse",
                  "id": "2g{~ctz,4nUzTI.=5y{3",
                  "inputs": {
                    "IF0": {
                      "block": {
                        "type": "logic_compare",
                        "id": "%:E)c1C2X|-FvD#QWkbx",
                        "fields": {
                          "OP": "EQ"
                        },
                        "inputs": {
                          "A": {
                            "block": {
                              "type": "variables_get",
                              "id": "`Q6{eXf-6C^Z,FZQmbve",
                              "fields": {
                                "VAR": {
                                  "id": "yl@$;J[F7Eh;?A6B?|Di"
                                }
                              }
                            }
                          },
                          "B": {
                            "block": {
                              "type": "math_number",
                              "id": "W,ly}:Q?=5]Qj6([e(2P",
                              "fields": {
                                "NUM": 0
                              }
                            }
                          }
                        }
                      }
                    },
                    "DO0": {
                      "block": {
                        "type": "controls_repeat_ext",
                        "id": "q!A]Lh*K*+/AJABRWk_[",
                        "inputs": {
                          "TIMES": {
                            "block": {
                              "type": "math_number",
                              "id": "#QUbU_w`x$*_V{Wc#Y18",
                              "fields": {
                                "NUM": 3
                              }
                            }
                          },
                          "DO": {
                            "block": {
                              "type": "localstorage_set",
                              "id": "w|D)Er#F/6-B6YAej;tf",
                              "inputs": {
                                "KEY": {
                                  "block": {
                                    "type": "variables_get",
                                    "id": "k]CtOsIb*rmC32y55#ME",
                                    "fields": {
                                      "VAR": {
                                        "id": "yl@$;J[F7Eh;?A6B?|Di"
                                      }
                                    }
                                  }
                                },
                                "VALUE": {
                                  "block": {
                                    "type": "date_picker",
                                    "id": "#j4@nD}Q/,c3t}uy(Q{]",
                                    "fields": {
                                      "MY_DATE": "2024-01-01"
                                    }
                                  }
                                }
                              },
                              "next": {
                                "block": {
                                  "type": "math_change",
                                  "id": "k3lC7rX(x!TJaD-BsZMW",
                                  "fields": {
                                    "VAR": {
                                      "id": "yl@$;J[F7Eh;?A6B?|Di"
                                    }
                                  },
                                  "inputs": {
                                    "DELTA": {
                                      "shadow": {
                                        "type": "math_number",
                                        "id": "Z69FKzhl{`3bUY|!9*ou",
                                        "fields": {
                                          "NUM": 1
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "next": {
                          "block": {
                            "type": "mint_print",
                            "id": "J2GPXT8Gl-GR8_;i]ID%",
                            "inputs": {
                              "TEXT": {
                                "block": {
                                  "type": "colour_random",
                                  "id": "wxNhNigTTr+}`ovDTvo}"
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "mint_toast",
                                "id": "()-]RR#+ZL_%7~|St??@",
                                "inputs": {
                                  "CONTENT": {
                                    "block": {
                                      "type": "mint_sha256",
                                      "id": "EH1R}6aj1X!AsUyOZnj.",
                                      "inputs": {
                                        "TEXT": {
                                          "block": {
                                            "type": "mint_urlcodec",
                                            "id": "$oUM96qA-g}$B#g9}#H5",
                                            "fields": {
                                              "MODE": "ENCODE"
                                            },
                                            "inputs": {
                                              "TEXT": {
                                                "block": {
                                                  "type": "mint_ip",
                                                  "id": "!Fah7`:ts1@meq(ye@Z7"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "TIME": {
                                    "block": {
                                      "type": "math_number",
                                      "id": "8zjzLIamil=mmS[G2ucO",
                                      "fields": {
                                        "NUM": 1.5
                                      }
                                    }
                                  }
                                },
                                "next": {
                                  "block": {
                                    "type": "text_print",
                                    "id": "-UwS$Xf%ZcA;USoKuE:L",
                                    "inputs": {
                                      "TEXT": {
                                        "block": {
                                          "type": "localstorage_length",
                                          "id": "p|=h69iu[;2cDf6I@Ee:"
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "ELSE": {
                      "block": {
                        "type": "text_print",
                        "id": "fiPwSO2{RNfrQAy4rw79",
                        "inputs": {
                          "TEXT": {
                            "block": {
                              "type": "text",
                              "id": "`MJKVz.c5x6gd.(bv!BK",
                              "fields": {
                                "TEXT": "Hello!"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "name": "num",
      "id": "yl@$;J[F7Eh;?A6B?|Di"
    }
  ]
}
