const vscode = require("vscode")

const configuration = vscode.workspace.getConfiguration('editor');
configuration.update('insertSpaces', false);
configuration.update('tabSize', 4);

const snippets_exp = [
    //Objects
    {
        label: "Canvas",
        insertText: new vscode.SnippetString("Canvas($0):"),
        kind: vscode.CompletionItemKind.Class,
        detail: "Canvas(width:int, height:int)"
    },
    {
        label: "Sprite",
        insertText: new vscode.SnippetString("Sprite($0):"),
        kind: vscode.CompletionItemKind.Class,
        detail: "Canvas(x:int, y:int, width:int, height:int)"
    },
    //Drawing Functions
    {
        label: "Pixel",
        insertText: new vscode.SnippetString("pixel($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "pixel(x:int, y:int, color:hex)"
    },
    {
        label: "Line",
        insertText: new vscode.SnippetString("line($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "line(x:int, y:int, x:int, y:int)"
    },
    {
        label: "Outline",
        insertText: new vscode.SnippetString("outline($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "outline(color:hex)"
    },
    {
        label: "Rec",
        insertText: new vscode.SnippetString("rec($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rec(x:int, y:int, width:int, height:int, color:hex)"
    },
    {
        label: "Rec Outline",
        insertText: new vscode.SnippetString("rec_outline($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rec_outline(x:int, y:int, width:int, height:int, color:hex)"
    },
    {
        label: "Rec Outlined",
        insertText: new vscode.SnippetString("rec_outlined($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rec_outlined(x:int, y:int, width:int, height:int, color:hex, color:hex)"
    },
    {
        label: "Polyline",
        insertText: new vscode.SnippetString("polyline($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "polyline(color:hex, thickness:int, wrap:bool, x_1:int..., y_1:int...)"
    },
    {
        label: "Circle",
        insertText: new vscode.SnippetString("rec($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "cricle(x:int, y:int, radius:int, color:hex)"
    },
    {
        label: "Fill",
        insertText: new vscode.SnippetString("fill($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "fill(x:int, y:int, color:int, continues:bool)"
    },
    {
        label: "Effect",
        insertText: new vscode.SnippetString("effect($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "effect(name:string, intensity:float)"
    },
    {
        label: "Flip",
        insertText: new vscode.SnippetString("flip($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "flip(axis:string)"
    },
    {
        label: "Copy",
        insertText: new vscode.SnippetString("copy($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "copy(x:int, y:int, width:int, height:int, dx:int, dy:int, wrap:bool)",
    },
]

const snippets_base = [
    //Predefined Functions
    {
        label: "Out",
        insertText: new vscode.SnippetString("out($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "out(output:variable)",
    },
    {
        label: "Inp",
        insertText: new vscode.SnippetString("inp($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "inp(message:string, variable)",
    },
    {
        label: "Error",
        insertText: new vscode.SnippetString("err($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "err(error_type:string, error_message:string)",
    },
    {
        label: "Str",
        insertText: new vscode.SnippetString("str($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "str(variable:int)",
    },
    {
        label: "Int",
        insertText: new vscode.SnippetString("int($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "int(variable:string)",
    },
    {
        label: "Copy from file",
        insertText: new vscode.SnippetString("copy_from_file($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "copy_from_file(path:string, x:int, y:int, wrap:bool)",
    },
    {
        label: "Save to file",
        insertText: new vscode.SnippetString("save_to_file($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "save_to_file(dir:string)",
    },
    {
        label: "Rand",
        insertText: new vscode.SnippetString("rand($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rand(min:int, max:int, seed:int)",
    },
    {
        label: "Hex",
        insertText: new vscode.SnippetString("hex($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "hex(hex:string)",
    },
    {
        label: "HEX Color",
        insertText: new vscode.SnippetString("hex_color($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "hex_color(hex_color:string)",
    },
    {
        label: "RGB",
        insertText: new vscode.SnippetString("rgb($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rgb(red:int, green:int, blue:int)",
    },
    {
        label: "RGBA",
        insertText: new vscode.SnippetString("rgba($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "rgba(red:int, green:int, blue:int, alpha:int)",
    },
    {
        label: "HSL",
        insertText: new vscode.SnippetString("hsl($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "hsl(h:float, s:float, l:float)",
    },
    {
        label: "HSLA",
        insertText: new vscode.SnippetString("hsla($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "hsla(h:float, s:float, l:float, a:float)",
    },
    {
        label: "sin",
        insertText: new vscode.SnippetString("sin($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "sin(angle:float)",
    },
    {
        label: "cos",
        insertText: new vscode.SnippetString("cos($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "cos(angle:float)",
    },
    {
        label: "tan",
        insertText: new vscode.SnippetString("tan($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "tan(angle:float)",
    },
    {
        label: "ceil",
        insertText: new vscode.SnippetString("ceil($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "ceil(number:float)",
    },
    {
        label: "floor",
        insertText: new vscode.SnippetString("floor($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "floor(number:float)",
    },
    {
        label: "round",
        insertText: new vscode.SnippetString("round($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "round(number:float)",
    },
    {
        label: "sqrt",
        insertText: new vscode.SnippetString("sqrt($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "sqrt(angle:float)",
    },
    {
        label: "abs",
        insertText: new vscode.SnippetString("abs($0)"),
        kind: vscode.CompletionItemKind.Function,
        detail: "abs(number:float)",
    },
    
    //Base Language
    {
        label: "For Loop",
        insertText: new vscode.SnippetString([
            "for ${1:VARIABLE} in ${2:RANGE}:",
            "\t"
        ].join("\n")),
        kind: vscode.CompletionItemKind.Snippet,
        detail: "Inserts a for loop",
    },
    {
        label: "for",
        insertText: "for",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "While Loop",
        insertText: new vscode.SnippetString([
            "while ${1:CONDITION}:",
            "\t"
        ].join("\n")),
        kind: vscode.CompletionItemKind.Snippet,
        detail: "Inserts a while loop",
    },
    {
        label: "while",
        insertText: "while",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "If Statement",
        insertText: new vscode.SnippetString([
            "if ${1:CONDITION}:",
            "\t"
        ].join("\n")),
        kind: vscode.CompletionItemKind.Snippet,
        detail: "Inserts an if statement",
    },
    {
        label: "if",
        insertText: "if",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "Elif Statement",
        insertText: new vscode.SnippetString([
            "elif ${1:CONDITION}:",
            "\t"
        ].join("\n")),
        kind: vscode.CompletionItemKind.Snippet,
        detail: "Inserts an elif statement",
    },
    {
        label: "elif",
        insertText: "elif",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "Else Statement",
        insertText: new vscode.SnippetString([
            "else:",
            "\t"
        ].join("\n")),
        kind: vscode.CompletionItemKind.Snippet,
        detail: "Inserts an else statement",
    },
    {
        label: "else",
        insertText: "else",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "break",
        insertText: "break",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "continue",
        insertText: "continue",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "pass",
        insertText: "pass",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "return",
        insertText: "return",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "import",
        insertText: "import",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "true",
        insertText: "true",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "false",
        insertText: "false",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Keyword",
    },
    {
        label: "PI",
        insertText: "PI",
        kind: vscode.CompletionItemKind.Constant,
        detail: "Constant",
    },
];

vscode.languages.registerCompletionItemProvider("canvas", {
    provideCompletionItems(document, position, token, context) {
        return [...snippets_base, ...snippets_exp];
    },
});