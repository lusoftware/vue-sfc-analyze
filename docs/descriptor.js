const sfc = {
  filename: "/Users/zhanglu/Desktop/workspace/Github/vue-sfc-analyze/index.vue",
  source: "<template>\n  <p>count: {{ count }}</p>\n  <p>double count: {{ doubleCount }}</p>\n  <button v-on:click=\"plus\">增加</button>\n  <button v-on:click=\"reduce\">减少</button>\n</template>\n\n<script>\nimport { ref, computed } from \"vue\";\n\nexport default {\n  setup(props) {\n    const count = ref(1);\n    const doubleCount = computed(() => {\n      return count.value * 2;\n    });\n\n    const plus = () => {\n      count.value += 1;\n    };\n\n    const reduce = () => {\n      count.value -= 1;\n    };\n\n    return {\n      count,\n      doubleCount,\n      plus,\n      reduce,\n    }\n  },\n};\n</script>\n\n<script setup>\n</script>\n\n<style scoped>\np {\n  color: red;\n}\n</style>",
  template: {
    type: "template",
    content: "\n  <p>count: {{ count }}</p>\n  <p>double count: {{ doubleCount }}</p>\n  <button v-on:click=\"plus\">增加</button>\n  <button v-on:click=\"reduce\">减少</button>\n",
    loc: {
      source: "\n  <p>count: {{ count }}</p>\n  <p>double count: {{ doubleCount }}</p>\n  <button v-on:click=\"plus\">增加</button>\n  <button v-on:click=\"reduce\">减少</button>\n",
      start: {
        column: 11,
        line: 1,
        offset: 10,
      },
      end: {
        column: 1,
        line: 6,
        offset: 162,
      },
    },
    attrs: {},
    ast: {
      type: 1,
      ns: 0,
      tag: "template",
      tagType: 0,
      props: [],
      isSelfClosing: false,
      children: [
        {
          type: 2,
          content: "  ",
          loc: {
            start: {
              column: 11,
              line: 1,
              offset: 10,
            },
            end: {
              column: 3,
              line: 2,
              offset: 13,
            },
            source: "\n  ",
          },
        },
        {
          type: 1,
          ns: 0,
          tag: "p",
          tagType: 0,
          props: [],
          isSelfClosing: false,
          children: [
            {
              type: 2,
              content: "count: ",
              loc: {
                start: {
                  column: 6,
                  line: 2,
                  offset: 16,
                },
                end: {
                  column: 13,
                  line: 2,
                  offset: 23,
                },
                source: "count: ",
              },
            },
            {
              type: 5,
              content: {
                type: 4,
                isStatic: false,
                constType: 0,
                content: "count",
                loc: {
                  start: {
                    column: 16,
                    line: 2,
                    offset: 26,
                  },
                  end: {
                    column: 21,
                    line: 2,
                    offset: 31,
                  },
                  source: "count",
                },
              },
              loc: {
                start: {
                  column: 13,
                  line: 2,
                  offset: 23,
                },
                end: {
                  column: 24,
                  line: 2,
                  offset: 34,
                },
                source: "{{ count }}",
              },
            },
          ],
          loc: {
            start: {
              column: 3,
              line: 2,
              offset: 13,
            },
            end: {
              column: 28,
              line: 2,
              offset: 38,
            },
            source: "<p>count: {{ count }}</p>",
          },
          codegenNode: undefined,
        },
        {
          type: 2,
          content: "\n  ",
          loc: {
            start: {
              column: 28,
              line: 2,
              offset: 38,
            },
            end: {
              column: 3,
              line: 3,
              offset: 41,
            },
            source: "\n  ",
          },
        },
        {
          type: 1,
          ns: 0,
          tag: "p",
          tagType: 0,
          props: [],
          isSelfClosing: false,
          children: [
            {
              type: 2,
              content: "double count: ",
              loc: {
                start: {
                  column: 6,
                  line: 3,
                  offset: 44,
                },
                end: {
                  column: 20,
                  line: 3,
                  offset: 58,
                },
                source: "double count: ",
              },
            },
            {
              type: 5,
              content: {
                type: 4,
                isStatic: false,
                constType: 0,
                content: "doubleCount",
                loc: {
                  start: {
                    column: 23,
                    line: 3,
                    offset: 61,
                  },
                  end: {
                    column: 34,
                    line: 3,
                    offset: 72,
                  },
                  source: "doubleCount",
                },
              },
              loc: {
                start: {
                  column: 20,
                  line: 3,
                  offset: 58,
                },
                end: {
                  column: 37,
                  line: 3,
                  offset: 75,
                },
                source: "{{ doubleCount }}",
              },
            },
          ],
          loc: {
            start: {
              column: 3,
              line: 3,
              offset: 41,
            },
            end: {
              column: 41,
              line: 3,
              offset: 79,
            },
            source: "<p>double count: {{ doubleCount }}</p>",
          },
          codegenNode: undefined,
        },
        {
          type: 2,
          content: "\n  ",
          loc: {
            start: {
              column: 41,
              line: 3,
              offset: 79,
            },
            end: {
              column: 3,
              line: 4,
              offset: 82,
            },
            source: "\n  ",
          },
        },
        {
          type: 1,
          ns: 0,
          tag: "button",
          tagType: 0,
          props: [
            {
              type: 7,
              name: "on",
              exp: {
                type: 4,
                content: "plus",
                isStatic: false,
                constType: 0,
                loc: {
                  start: {
                    column: 23,
                    line: 4,
                    offset: 102,
                  },
                  end: {
                    column: 27,
                    line: 4,
                    offset: 106,
                  },
                  source: "plus",
                },
              },
              arg: {
                type: 4,
                content: "click",
                isStatic: true,
                constType: 3,
                loc: {
                  start: {
                    column: 16,
                    line: 4,
                    offset: 95,
                  },
                  end: {
                    column: 21,
                    line: 4,
                    offset: 100,
                  },
                  source: "click",
                },
              },
              modifiers: [],
              loc: {
                start: {
                  column: 11,
                  line: 4,
                  offset: 90,
                },
                end: {
                  column: 28,
                  line: 4,
                  offset: 107,
                },
                source: "v-on:click=\"plus\"",
              },
            },
          ],
          isSelfClosing: false,
          children: [
            {
              type: 2,
              content: "增加",
              loc: {
                start: {
                  column: 29,
                  line: 4,
                  offset: 108,
                },
                end: {
                  column: 31,
                  line: 4,
                  offset: 110,
                },
                source: "增加",
              },
            },
          ],
          loc: {
            start: {
              column: 3,
              line: 4,
              offset: 82,
            },
            end: {
              column: 40,
              line: 4,
              offset: 119,
            },
            source: "<button v-on:click=\"plus\">增加</button>",
          },
          codegenNode: undefined,
        },
        {
          type: 2,
          content: "\n  ",
          loc: {
            start: {
              column: 40,
              line: 4,
              offset: 119,
            },
            end: {
              column: 3,
              line: 5,
              offset: 122,
            },
            source: "\n  ",
          },
        },
        {
          type: 1,
          ns: 0,
          tag: "button",
          tagType: 0,
          props: [
            {
              type: 7,
              name: "on",
              exp: {
                type: 4,
                content: "reduce",
                isStatic: false,
                constType: 0,
                loc: {
                  start: {
                    column: 23,
                    line: 5,
                    offset: 142,
                  },
                  end: {
                    column: 29,
                    line: 5,
                    offset: 148,
                  },
                  source: "reduce",
                },
              },
              arg: {
                type: 4,
                content: "click",
                isStatic: true,
                constType: 3,
                loc: {
                  start: {
                    column: 16,
                    line: 5,
                    offset: 135,
                  },
                  end: {
                    column: 21,
                    line: 5,
                    offset: 140,
                  },
                  source: "click",
                },
              },
              modifiers: [],
              loc: {
                start: {
                  column: 11,
                  line: 5,
                  offset: 130,
                },
                end: {
                  column: 30,
                  line: 5,
                  offset: 149,
                },
                source: "v-on:click=\"reduce\"",
              },
            },
          ],
          isSelfClosing: false,
          children: [
            {
              type: 2,
              content: "减少",
              loc: {
                start: {
                  column: 31,
                  line: 5,
                  offset: 150,
                },
                end: {
                  column: 33,
                  line: 5,
                  offset: 152,
                },
                source: "减少",
              },
            },
          ],
          loc: {
            start: {
              column: 3,
              line: 5,
              offset: 122,
            },
            end: {
              column: 42,
              line: 5,
              offset: 161,
            },
            source: "<button v-on:click=\"reduce\">减少</button>",
          },
          codegenNode: undefined,
        },
        {
          type: 2,
          content: "\n",
          loc: {
            start: {
              column: 42,
              line: 5,
              offset: 161,
            },
            end: {
              column: 1,
              line: 6,
              offset: 162,
            },
            source: "\n",
          },
        },
      ],
      loc: {
        start: {
          column: 1,
          line: 1,
          offset: 0,
        },
        end: {
          column: 12,
          line: 6,
          offset: 173,
        },
        source: "<template>\n  <p>count: {{ count }}</p>\n  <p>double count: {{ doubleCount }}</p>\n  <button v-on:click=\"plus\">增加</button>\n  <button v-on:click=\"reduce\">减少</button>\n</template>",
      },
      codegenNode: undefined,
    },
  },
  script: {
    type: "script",
    content: "\nimport { ref, computed } from \"vue\";\n\nexport default {\n  setup(props) {\n    const count = ref(1);\n    const doubleCount = computed(() => {\n      return count.value * 2;\n    });\n\n    const plus = () => {\n      count.value += 1;\n    };\n\n    const reduce = () => {\n      count.value -= 1;\n    };\n\n    return {\n      count,\n      doubleCount,\n      plus,\n      reduce,\n    }\n  },\n};\n",
    loc: {
      source: "\nimport { ref, computed } from \"vue\";\n\nexport default {\n  setup(props) {\n    const count = ref(1);\n    const doubleCount = computed(() => {\n      return count.value * 2;\n    });\n\n    const plus = () => {\n      count.value += 1;\n    };\n\n    const reduce = () => {\n      count.value -= 1;\n    };\n\n    return {\n      count,\n      doubleCount,\n      plus,\n      reduce,\n    }\n  },\n};\n",
      start: {
        column: 9,
        line: 8,
        offset: 183,
      },
      end: {
        column: 1,
        line: 34,
        offset: 563,
      },
    },
    attrs: {},
  },
  scriptSetup: null,
  styles: [
    {
      type: "style",
      content: "\np {\n  color: red;\n}\n",
      loc: {
        source: "\np {\n  color: red;\n}\n",
        start: {
          column: 15,
          line: 39,
          offset: 614,
        },
        end: {
          column: 1,
          line: 43,
          offset: 635,
        },
      },
      attrs: {
        scoped: true,
      },
      scoped: true,
    },
  ],
  customBlocks: [],
  cssVars: [],
  slotted: false,
  shouldForceReload: prevImports => hmrShouldReload(prevImports, descriptor),
}