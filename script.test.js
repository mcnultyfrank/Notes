import { colourPick } from "./script.js";

it ('Should match colour and hex', () => {
    const result = colourPick();
    expect(result).toBe('Hello');
});