import {reverseSeq} from "../2-reverseSeq";
import {assert} from "chai";

describe("reverseSeq", function () {
    it("Sample Test", function () {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});