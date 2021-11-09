import { checkIsbnFormat } from '../utils'

describe('checkIsbnFormat', () => {
    it('returns true on right format', () => {
        let buff = checkIsbnFormat('666-6-6666-6666-6')
        expect(buff).toBe(true)
    });

    it('returns false on letters', () => {
        let buff = checkIsbnFormat('666-6-66a6-6666-6')
        expect(buff).toBe(false)
    });

    it('returns false on number sequence without dashes', () => {
        let buff = checkIsbnFormat('6666666666666')
        expect(buff).toBe(false)
    });

    it('returns false on number sequence with spaces', () => {
        let buff = checkIsbnFormat('666 6 6666 6666 6')
        expect(buff).toBe(false)
    });

    it('returns false on cutted number sequence', () => {
        let buff = checkIsbnFormat('666-6-6666-6666')
        expect(buff).toBe(false)
    });
});