/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * データフェッチングに用いるfetcher.
 *
 * @param resource - エンドポイント
 * @param init - methodやheaderの設定
 * @returns - レスポンス
 */
export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init)

  if (!res.ok) {
    //NOTE: レスポンスが失敗したときに例外を投げる
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました。',
    )
    throw error
  }

  return res.json()
}
