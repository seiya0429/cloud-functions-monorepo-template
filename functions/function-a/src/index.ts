import ff from '@google-cloud/functions-framework';
import { hello } from '@packages/common';

export async function main(req: ff.Request, res: ff.Response) {
  res.send(hello());
}
