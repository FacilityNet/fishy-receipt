type Func<TArgs extends any[], TResult> = (...args: TArgs) => TResult

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

export function makeStyles<T extends object>(it: Iterable<T>) {
    return [...it].reduce((acc, cur) => Object.assign(acc, cur), {} as Partial<T>)
}

export function* repeat<TArgs extends unknown[], TResult>(n: number, f: (n: number, ...args: TArgs) => TResult, ...args: TArgs) {
    for (let i = 0; i < n; i++) {
        yield f(i, ...args)
    }
}
