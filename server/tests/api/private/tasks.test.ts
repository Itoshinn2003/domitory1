import { WS_TYPES } from 'api/@constants';
import type { TaskCreated, TaskDeleted, TaskUpdated } from 'api/@types/task';
import { expect, test } from 'vitest';
import { createSessionClients, noCookieClient } from '../apiClient';
import { DELETE, GET, PATCH, POST, WS } from '../utils';

test(GET(noCookieClient.private.tasks), async () => {
  const { apiClient } = await createSessionClients();
  const res = await apiClient.private.tasks.get();

  expect(res.status).toEqual(200);
});

test(POST(noCookieClient.private.tasks), async () => {
  const { apiClient } = await createSessionClients();
  const res = await apiClient.private.tasks.post({ body: { label: 'a' } });

  expect(res.status).toEqual(201);
});

test(PATCH(noCookieClient.private.tasks), async () => {
  const { apiClient } = await createSessionClients();
  const task = await apiClient.private.tasks.$post({ body: { label: 'a' } });
  const res = await apiClient.private.tasks.patch({ body: { taskId: task.id, label: 'b' } });

  expect(res.status).toEqual(200);
});

test(DELETE(noCookieClient.private.tasks), async () => {
  const { apiClient } = await createSessionClients();
  const task = await apiClient.private.tasks.$post({ body: { label: 'a' } });
  const res = await apiClient.private.tasks.delete({ body: { taskId: task.id } });

  expect(res.status).toEqual(200);
});

test(PATCH(noCookieClient.private.tasks._taskId('_taskId')), async () => {
  const { apiClient } = await createSessionClients();
  const task = await apiClient.private.tasks.$post({ body: { label: 'a' } });
  const res = await apiClient.private.tasks._taskId(task.id).patch({ body: { label: 'b' } });

  expect(res.status).toEqual(200);
});

test(DELETE(noCookieClient.private.tasks._taskId('_taskId')), async () => {
  const { apiClient } = await createSessionClients();
  const task = await apiClient.private.tasks.$post({ body: { label: 'a' } });
  const res = await apiClient.private.tasks._taskId(task.id).delete();

  expect(res.status).toEqual(200);

  const task2 = await apiClient.private.tasks.$post({ body: { label: 'b', image: new Blob([]) } });
  const res2 = await apiClient.private.tasks._taskId(task2.id).delete();

  expect(res2.status === 200).toBeTruthy();
});

test(WS(WS_TYPES[0]), async () => {
  const { apiClient, wsClient } = await createSessionClients();

  await new Promise<void>((resolve): void => {
    const label = 'a';

    wsClient.on('message', async (json: string): Promise<void> => {
      const { type, task }: TaskCreated = JSON.parse(json);

      expect(type).toBe(WS_TYPES[0]);
      expect(task.label).toBe(label);
      resolve();
      wsClient.close();
    });

    apiClient.private.tasks.post({ body: { label } });
  });
});

test(WS(WS_TYPES[1]), async () => {
  const { apiClient, wsClient } = await createSessionClients();
  const created = await apiClient.private.tasks.$post({ body: { label: 'a' } });

  await new Promise<void>((resolve): void => {
    const label = 'b';

    wsClient.on('message', async (json: string): Promise<void> => {
      const { type, task }: TaskUpdated = JSON.parse(json);

      expect(type).toBe(WS_TYPES[1]);
      expect(task.label).toBe(label);
      resolve();
      wsClient.close();
    });

    apiClient.private.tasks.patch({ body: { taskId: created.id, label } });
  });
});

test(WS(WS_TYPES[2]), async () => {
  const { apiClient, wsClient } = await createSessionClients();
  const created = await apiClient.private.tasks.$post({ body: { label: 'a' } });

  await new Promise<void>((resolve): void => {
    wsClient.on('message', async (json: string): Promise<void> => {
      const { type, taskId }: TaskDeleted = JSON.parse(json);

      expect(type).toBe(WS_TYPES[2]);
      expect(taskId).toBe(created.id);
      resolve();
      wsClient.close();
    });

    apiClient.private.tasks._taskId(created.id).delete();
  });
});
