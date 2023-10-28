import { CardanoWallet } from "@meshsdk/react";

export default function Home() {
  return (<>
    <div className="mt-8">
      <div className="flex items-center sm:justify-between sm:gap-4">
        <CardanoWallet />
        <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
          <div className="flex gap-4">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="Preprod">Preprod</option>
              <option value="Preview">Preview</option>
              <option value="MainNet">MainNet</option>

            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <div>
        <textarea
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Encoded Transaction"
          rows={8}
          id="message"
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        >
          Sign and submit
        </button>
      </div>
    </div>

  </>);
}