import { setupDb } from '@/e2e/db-util'
import { expect, test } from '@playwright/test'

test.beforeEach(async () => {
  await setupDb()
})

test.describe('ToDoリスト', () => {
  test('作成済みタスクが表示される', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('cell', { name: 'e2e' })).toBeVisible()
  })

  test('タスクを追加できる', async ({ page }) => {
    const taskTitle = 'New task'
    await page.goto('/')
    await page.getByRole('textbox', { name: 'taskTitle' }).fill(taskTitle)
    await page.getByRole('button', { name: 'Add' }).click()
    await page.waitForTimeout(3000)
    await expect(page.getByRole('cell', { name: taskTitle })).toBeVisible()
    await expect(page.getByText(`Task "${taskTitle}" has been added.`, { exact: true })).toBeVisible()
  })

  test('タスクを更新できる', async ({ page }) => {
    await page.goto('/')
    const checkbox = page.getByRole('checkbox', { name: 'Task status' })
    await expect(checkbox).toBeVisible()
    await expect(checkbox).not.toBeChecked()
    await checkbox.check()
    await page.waitForTimeout(3000)
    await expect(checkbox).toBeChecked()
  })

  test('タスクを削除できる', async ({ page }) => {
    await page.goto('/')
    const task = await page.getByRole('cell', { name: 'e2e' })
    await expect(task).toBeVisible()
    await page.getByRole('button', { name: 'Task action' }).click()
    const deleteTaskAction = page.getByRole('menuitem', { name: 'Delete' })
    await expect(deleteTaskAction).toBeVisible()
    await deleteTaskAction.click()
    await page.waitForTimeout(3000)
    await expect(task).not.toBeVisible()
    await expect(page.getByRole('cell', { name: 'No tasks.' })).toBeVisible()
  })
})
