/**
 * Proyecto del Algoritmo Sliding Window
La técnica de Sliding Window es poderosa y eficiente para resolver problemas
 donde se analizan subconjuntos continuos de datos.

Objetivo
Usar la técnica Sliding Window para identificar la palabra más larga en una cadena de texto.

Problema: Encontrar la Palabra Más Larga
Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto.
 El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. 
 Este problema simplifica la lógica para que los alumnos 
 practiquen cómo manejar cadenas de texto con ventanas deslizantes.

 String.prototype.split()
 The split() method of String values takes a pattern and divides this string 
 into an ordered list of substrings 
 by searching for the pattern, puts these substrings into an array, 
 and returns the array.
 */

//Arrow Function
let findLongestWord = (text) => 
{
    // quitando los espacios, caracteres y poniendolo en minuscula
    const onlyWord = text.replace(/[^\w\s]/g, '').toLowerCase();
    
    // separando el texto en subarrays de palabras, dentro del paréntesis esta el separador
    const words = onlyWord.split(/\s+/);
    // \s representa espacios y el + significa 'uno o más'
    //entonces cuando hallé un espacio o más es cuando separará las palabras en subarreglos

    
    

    return longestWord;
}

console.log(findLongestWord(
    "Bali and Lombok are neighbouring islands; both are part of the Indonesian archipelago. "
));