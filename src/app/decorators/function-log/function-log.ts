export const FunctionLog: MethodDecorator = (targetComponent: Object, methodName: string, methodDescription: PropertyDescriptor): PropertyDescriptor => { 
    return {
        value: (...arg: unknown[]) => {
            const res: unknown = methodDescription.value(...arg)
            console.log(`Вызвали метод ${methodName}(${arg.join(', ')}), он вернул следующее: ${res}`)
            return res
        }
    }
}