import { formatCurrecncy } from "../scripts/utils/money.js";

describe('Test Suite: Format Currency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrecncy(2095)).toEqual('20.95');
    });

    it('works with zero', () => {
        expect(formatCurrecncy(0)).toEqual('0.00');
    });

    it('rounds upto the nearest cent', () => {
        expect(formatCurrecncy(2000.5)).toEqual('20.01');
    })
})