/**
 * Сложение
 *
 * @param a
 * @param b
 */
export const sum = (a:number, b:number) => {
    return a + b;
}

/**
 * Вычитание
 *
 * @param a
 * @param b
 */
export const subtraction = (a:number, b:number) => {
    return a - b;
}

/**
 * Умножение
 *
 * @param a
 * @param b
 */
export const multiplication = (a:number, b:number) => {
    return a * b;
}

/**
 * Деление
 *
 * @param a
 * @param b
 */
export const division = (a:number, b:number) => {
    return a / b;
}

/**
 * Возведение в степень
 *
 * @param a
 * @param b
 */
export const exponentiation = (a: number, b: number) => {
    return Math.pow(a, b);
}

/**
 * Возведение в квадрат
 *
 * @param a
 */
export const squaring = (a: number) => {
    return Math.pow(a, 2);
}

/**
 * Факториал
 *
 * @param a
 */
export const factorial = (a: number) => {
    if (a === 0) {
        return 1;
    }
    let f = 1;
    for (let i = 1; i < a; i++) {
        f = f * (i + 1);
    }
    return f;
}