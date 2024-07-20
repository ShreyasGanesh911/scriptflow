export const snippets={
        java:
`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
        `,
        javascript:`const greet = (a)=>{
    console.log(a)
}
greet("Hello world")
        `,
        typescript:
`const greet = (a:string)=>{
    console.log(a)
}
greet("Hello world")
        `,
        python:
        `print("Hello World!")`,
        php:
        `<?php
echo "Hello, World!";
?>
`,
    csharp:
    `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
`,
dart:
`void main() {
  print('Hello, World!');
}
`,
elixer:
`IO.puts "Hello, World!"
`,
coffeescript:
`console.log "hello world"`
}




