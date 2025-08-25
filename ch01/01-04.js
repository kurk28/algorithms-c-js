// quick-find algorithm, p19-ex1.4
import { argv, stdin as input, stdout as output} from 'node:process';
import { createInterface } from 'node:readline';

let rl;
let ids;

if (argv[2] === 'i') {
  rl = createInterface({
    input,
    output,
    prompt: 'Input id array size:',
  });

  rl.prompt();

  rl.on('line', (line) => {
    if (ids) {
      if (line.trim()) {
        const nums = line.split(' ');
        const p = parseInt(nums[0], 10);
        const q = parseInt(nums[1], 10);
        if (ids[p] === ids[q]) {
          rl.prompt();
        }
        const prev = ids[p];
        for (let i = 0; i < ids.length; i++) {
          if (ids[i] === prev) ids[i] = ids[q];
        }
        rl.prompt();
      } else {
        console.log(ids);
        rl.close();
      }
    } else {
      const size = parseInt(line, 10);
      ids = new Array(size);
      for (let i = 0; i < ids.length; i++) ids[i] = i;
      rl.setPrompt('Insert q and p:');
      rl.prompt();
    }
  });
} else {
  let mockInput = [
    [0, 2],
    [1, 4],
    [2, 5],
    [3, 6],
    [0, 4],
    [6, 0],
    [1, 3],
  ];

  function quickFind(input, size) {
    const id = new Array(size);
    for (let i = 0; i < size; i++) id[i] = i;
    for (let el of input) {
      // read two ids
      let idAccessCount = 2;
      if (id[el[0]] === id[el[1]]) {
        console.log('id access count: ', idAccessCount);
        continue;
      }
      const prev = id[el[0]];
      for (let i = 0; i < size; i++) {
        // read id
        idAccessCount += 1;
        if (id[i] === prev) {
          // write id
          idAccessCount += 1;
          id[i] = id[el[1]];
        }
      }
      console.log('id access count: ', idAccessCount);
    }
    console.log('result:', id);
  }

  quickFind(mockInput, 10);
}
