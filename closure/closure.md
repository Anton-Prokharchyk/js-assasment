# Closure

**Closure** - when fucntion saves reference to **LE(Lexical Environment)** where it was declared via **[[Environment]]** and can access variables even after outer function **Fucntion Execution Context** was done and **Garbage Collector(GC)** has deleted unreachable data.

```js
var v = 5;
let l = 6;

function a1(param1) {
    let letvariable = 0;
    const constvariable = 1;
    var varvariable = 2;
    return function b2(param2) {
        let letvariable2 = 10;
        const constvariable2 = 11;
        var varvariable2 = 12;
        letvariable++;
        varvariable++;
        return constvariable;
    }

}

a1(3)(13);

GlobalExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord (DeclarativeEnvironmentRecord(DER)): {
      l: 6,
      // let, const, class, FD (strict)
    },
    OuterEnvironmentReference: null
  },

  VariableEnvironment: {
    EnvironmentRecord (ObjectEnvironmentRecord(OER)): window {
      v: 5,
      a1: 'function body'
      // var, function (non strict)
    },
    OuterEnvironmentReference: null
  },

  ThisBinding: window/global (non strict), undefined (strict)
}

function a1 = {
    FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            letvariable: 0,
            constvariable: 1,
            param1: 3,
            functionDeclaration: {b2},
            arguments: [3]
        },
        OuterEnvironmentReference: GlobalExecutionContext.LexicalEnvironment - Declarative Environment Record
    },

    VariableEnvironment: {
        EnvironmentRecord: {
            varvariable: 2,
        },
        OuterEnvironmentReference: GlobalExecutionContext.LexicalEnvironment - Declarative Environment Record
    },

        ThisBinding: window/global object, or undefined strict mode
    }

    FunctionObject = {
        [[Environment]]: GlobalExecutionContext.LexicalEnvironment
    }
}

function b2 = {
    FunctionExecutionContext = {
      LexicalEnvironment: {
          EnvironmentRecord: {
              letvariable2: 10,
              constvariable2: 11,
              param2: 13,
              functionDeclaration: {},
              arguments: [13]
          },
          OuterEnvironmentReference: a1ExecutionContext.LexicalEnvironment
      },

      VariableEnvironment: {
          EnvironmentRecord: {
              varvariable2: 12,
          },
          OuterEnvironmentReference: a1ExecutionContext.LexicalEnvironment
      },

      ThisBinding: window/global object, or undefined strict mode
    }

    FunctionObject = {
        [[Environment]]: a1 LE
    }
}

/*
FunctionExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      letVar1: ...,
      constVar2: ...,
      param1: ...,
      functionDeclaration: ...,
      arguments: ...
    },
    OuterEnvironmentReference: <parent LE>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      var1: ...,
      var2: ...
    },
    OuterEnvironmentReference: <parent LE>
  },

  ThisBinding: <this value>
}

FunctionObject = {
  [[Environment]]: <LexicalEnvironment where function was created>
}
*/
```
