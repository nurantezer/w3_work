//*Arithmetic Operations
//*A typical arithmetic operation operates on two numbers.

//*The two numbers can be literals:

//*Example
let x = 100 + 50;
or variables:

//Example
let x = a + b;
or expressions:

//*Example
let x = (100 + 50) * a;

// Adding
// The addition operator (+) adds numbers:

// Example
// let x = 5;
// let y = 2;
// let z = x + y;
// Subtracting
// The subtraction operator (-) subtracts numbers.

// Example
// let x = 5;
// let y = 2;
// let z = x - y;
// Multiplying
// The multiplication operator (*) multiplies numbers.

// Example
// let x = 5;
// let y = 2;
// let z = x * y;
// Dividing
// The division operator (/) divides numbers.

// Example
// let x = 5;
// let y = 2;
// let z = x / y;
// Remainder
// The modulus operator (%) returns the division remainder.

// Example
// let x = 5;
// let y = 2;
// let z = x % y;

// Incrementing
// The increment operator (++) increments numbers.

// Example
// let x = 5;
// x++;
// let z = x;
// Decrementing
// The decrement operator (--) decrements numbers.

// Example
// let x = 5;
// x--;
// let z = x;
// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

// Example
// let x = 5;
// let z = x ** 2;
// x ** y produces the same result as Math.pow(x,y):

// Example
// let x = 5;
// let z = Math.pow(x,2);

// Operatör Önceliği
// Operatör önceliği, işlemlerin bir aritmetik ifadede gerçekleştirilme sırasını tanımlar.

// Misal
// let x = 100 + 50 * 3;
// Yukarıdaki örneğin sonucu 150 * 3 ile aynı mı yoksa 100 + 150 ile aynı mı?

// Önce toplama mı çarpma mı yapılır?

// Geleneksel okul matematiğinde olduğu gibi, önce çarpma işlemi yapılır.

// Çarpma ( *) ve bölme ( ), toplama ( ) ve çıkarmadan ( ) /daha yüksek önceliğe sahiptir .+-

// Ve (okul matematiğinde olduğu gibi) öncelik parantez kullanılarak değiştirilebilir.

// Parantez kullanırken, önce parantez içindeki işlemler hesaplanır: