import { testCases } from "../__testCases__/actions";

for (const tc of testCases) {
  it(tc.description, () => {
    expect(tc.actionCreator).toEqual(tc.expectedAction);
  });
}
