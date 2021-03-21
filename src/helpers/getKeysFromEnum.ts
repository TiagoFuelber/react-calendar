import Enum from '../domain/Enum';

const getKeysFromEnum = (e: Enum): number[] => Object.keys(e)
    .filter(key => typeof e[key as any] === 'number')
    .map(key => e[key as any] as number);

export default getKeysFromEnum;