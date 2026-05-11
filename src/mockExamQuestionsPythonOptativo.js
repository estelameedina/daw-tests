const q = (id, text, options, correctIndex) => ({
  id: `sim-python-${id}`,
  text,
  options,
  correct: options[correctIndex]
});

export const mockExamQuestionsPythonOptativo = [
  q(1, "¿Cuál es el resultado del siguiente código?\nx = 5\ny = \"5\"\nprint(x + int(y))", ["\"55\"", "10", "Error", "5"], 1),
  q(2, "¿Qué tipo de dato devuelve la función input() en Python?", ["int", "float", "str", "bool"], 2),
  q(3, "¿Qué salida produce el siguiente código?\ncontador = 0\nwhile contador < 3:\n    contador += 1\n    if contador == 2:\n        continue\n    print(contador)", ["1 2 3", "1 3", "2 3", "1 2"], 1),
  q(4, "¿Qué salida produce el siguiente código?\nx = 7\nif x > 10:\n    print(\"A\")\nelif x > 5:\n    print(\"B\")\nelse:\n    print(\"C\")", ["A", "B", "C", "No imprime nada"], 1),
  q(5, "¿Cuál es el resultado?\nfor i in range(3):\n    print(i)", ["1 2 3", "0 1 2", "0 1 2 3", "Error"], 1),
  q(6, "¿Qué salida produce el siguiente código?\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\nelse:\n    print(\"Fin\")", ["0 1 2 3 Fin", "0 1 2", "0 1 2 Fin", "0 1 2 3"], 1),
  q(7, "¿Cuál es la salida?\nx = 10\nif x > 5:\n    print(\"A\")\nelif x > 8:\n    print(\"B\")", ["A", "B", "A y B", "Nada"], 0),
  q(8, "¿Cuál es el resultado de \"Hola\"[1]?", ["H", "o", "l", "a"], 1),
  q(9, "¿Qué devuelve len(\"Python\")?", ["5", "6", "7", "Error"], 1),
  q(10, "¿Cuál de las siguientes estructuras es mutable?", ["tupla", "string", "lista", "int"], 2),
  q(11, "¿Qué método añade un elemento al final de una lista?", ["add()", "append()", "insert()", "push()"], 1),
  q(12, "¿Cuál es la salida?\nlista = [1, 2, 3]\nlista.append(4)\nprint(lista)", ["[1, 2, 3]", "[4, 1, 2, 3]", "[1, 2, 3, 4]", "Error"], 2),
  q(13, "¿Qué característica tienen las tuplas?", ["Son mutables", "Son inmutables", "Son listas ordenadas", "No almacenan datos"], 1),
  q(14, "¿Cómo se accede al valor asociado a una clave en un diccionario?", ["dict.clave", "dict(clave)", "dict[clave]", "get(dict)"], 2),
  q(15, "¿Qué sucede si se accede a una clave inexistente en un diccionario usando []?", ["Devuelve None", "Devuelve 0", "Ignora la instrucción", "Error"], 3),
  q(16, "¿Qué función se utiliza para abrir un archivo?", ["open()", "file()", "read()", "load()"], 0),
  q(17, "¿Qué modo abre un archivo para escritura sobrescribiendo su contenido?", ["w", "a", "r", "x"], 0),
  q(18, "¿Cuál es la ventaja principal de usar with open(...)?", ["Mejora la velocidad", "Cierra automáticamente el archivo", "Evita errores de sintaxis", "Permite leer más rápido"], 1),
  q(19, "¿Qué método permite leer todo el contenido de un archivo?", ["read()", "write()", "open()", "close()"], 0),
  q(20, "¿Qué ocurre si intentas abrir un archivo que no existe en modo lectura?", ["Se crea automáticamente", "Devuelve vacío", "Se ignora", "Error"], 3),
  q(21, "¿Qué devuelve la siguiente función?\ndef funcion():\n    return 5, 10\n\na, b = funcion()\nprint(a + b)", ["15", "(5,10)", "Error", "\"510\""], 0),
  q(22, "¿Qué salida produce el siguiente código?\nclass Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\np = Persona(\"Ana\")\nprint(p.nombre)", ["Error", "None", "Persona", "\"Ana\""], 3),
  q(23, "¿Qué representa una clase en programación orientada a objetos?", ["Un dato", "Una función", "Una función avanzada", "Una plantilla"], 3),
  q(24, "¿Qué es un objeto?", ["Una función", "Una instancia de una clase", "Un tipo de dato", "Un archivo"], 1),
  q(25, "¿Qué salida produce el siguiente código?\nclass Animal:\n    def hablar(self):\n        return \"Sonido\"\n\nclass Perro(Animal):\n    pass\n\np = Perro()\nprint(p.hablar())", ["Error", "None", "Sonido", "\"Perro\""], 2),
  q(26, "¿Qué concepto permite ocultar los detalles internos de una clase?", ["Herencia", "Polimorfismo", "No se pueden ocultar los detalles internos de una clase", "Encapsulación"], 3),
  q(27, "¿Qué permite la herencia?", ["Repetir código", "Crear funciones", "Reutilizar código entre clases", "Ninguna de las anteriores"], 2),
  q(28, "¿Qué es el polimorfismo?", ["Diferentes objetos responden al mismo método de forma distinta", "Capacidad de un objeto de cambiar su valor", "Crear múltiples funciones", "Crear múltiples clases"], 0),
  q(29, "¿Qué palabra clave se usa para manejar errores?", ["if", "try", "while", "for"], 1),
  q(30, "¿Qué ocurre si no se captura una excepción?", ["Se ignora", "Se corrige automáticamente", "El programa se detiene", "Se repite la ejecución"], 2)
];
