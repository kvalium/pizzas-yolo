import { testCases } from "../__testCases__/actions";

for (const tc of testCases) {
  test(tc.description, () => {
    expect(tc.actionCreator).toEqual(tc.expectedAction);
  });
}
