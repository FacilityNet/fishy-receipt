type Func<TArgs extends any[], TResult> = (...args: TArgs) => TResult

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

export function* repeat<TArgs extends any[], TResult>(n: number, f: Func<[number, ...TArgs], TResult>, ...args: TArgs) {
    for (let i = 0; i < n; i++) {
        yield f(i, ...args)
    }
}
