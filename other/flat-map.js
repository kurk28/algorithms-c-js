// Напишите функцию, которая берет объект и преобразует его в плоскую карту
// с сохранением информации о пути до значения в исходном обьекте.
// Путь разделяется косой чертой ('/').

const data = {
    a: {
        b: {
            c: 12,
            d: "Hello World",
        },
        e: [1, 2, 3],
        f: null,
    },
};

const flatten = (input) => {
    const result = {};
    const getPathValue = (obj, path = "") => {
        const isNull = obj === null;
        const isArray = Array.isArray(obj);
        if (isNull || isArray) {
            result[path] = obj;
            return
        }

        for (const k of Object.keys(obj)) {
            const value = obj[k];
            const isValueObject = typeof value === "object";
            const isObject = isValueObject;

            if (isObject) {
                const key = path.length > 0 ? `${path}/${k}` : `${k}`
                getPathValue(obj[k], key)    
            } else {
                const key = `${path}/${k}`;
                result[key] = value;
            }
        }
    }

    getPathValue(input);
    console.log(result);
}
