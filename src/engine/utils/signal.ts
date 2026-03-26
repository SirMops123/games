export class Signal<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

export function signal<T>(value: T) {
    return new Signal<T>(value);
}