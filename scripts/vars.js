const textarea = document.querySelector("textarea")
    , aside = document.querySelector("aside")

    , tabSize = 4

let lineCount = 1

let variables = {}
  , pointer = 0
  , stack = []
  , instructions = textarea.value.split("\n")
  , loadedVar = ""

  , runType = "normal"
  , interpreting = false
