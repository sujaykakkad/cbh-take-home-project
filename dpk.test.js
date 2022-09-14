const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  (
    (input) => it("Returns the literal '0' when given no input", () => {
      const trivialKey = deterministicPartitionKey(input);
      expect(trivialKey).toBe("0");
    })
  )();

  (
    (input) => it(`Returns the literal '${input.partitionKey}' when given input as ${JSON.stringify(input)}`, () => {
      const trivialKey = deterministicPartitionKey(input);
      expect(trivialKey).toBe("12443");
    })
  )({ partitionKey: '12443' });

  (
    (input) => it(`Returns the literal '${input.partitionKey}' when given input as ${JSON.stringify(input)}`, () => {
      const trivialKey = deterministicPartitionKey(input);
      expect(trivialKey).toBe('{}');
    })
  )({ partitionKey: {} });

  (
    (input, output) => it(`Returns hash string ${output.substring(0, 6)}... when given input as ${JSON.stringify(input)}`, () => {
      const trivialKey = deterministicPartitionKey(input);
      expect(trivialKey).toBe(output);
    })
  )({ partitionKey: Array(257).fill('a').join('') },
    '5008048b64c14975181175f157be4a780c3d443d2177edf323d57884bc7e3979b9b53bca1325e880df3da0d97c435693441cb5527fbe950f5585678dfbb37785');

  (
    (input, output) => it(`Returns the hash string ${output.substring(0, 6)}... when given input as ${JSON.stringify(input)}`, () => {
      const trivialKey = deterministicPartitionKey(input);
      expect(trivialKey).toBe(output);
    })
  )({}, 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862');
});
