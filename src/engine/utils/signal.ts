export function signal<T>(initial: T): Signal<T> {
    let value = initial;

    function read() {
        return value;
    }

    read.set = (v: T) => {
        value = v;
    }

    read.update = (c: (v: T) => T) => {
        value = c(value);
    }

    return read;
}

export type Signal<T> = {
    (): T;
    set(value: T): void;
    update(fn: (value: T) => T): void;
};