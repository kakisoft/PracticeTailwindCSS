export default function Index() {
  return (
    <div>
      <div className="hero">
        <h1 className="title">React + Tailwind CSS</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an Example.</p>
      </div>



        <div>
            <div class="flex flex-row bg-gray-200">
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
            </div>
        </div>

        <div>
            <table class="border-collapse border-2 border-gray-500">
            <thead>
                <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">State</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border border-gray-400 px-4 py-2">Indiana</td>
                <td class="border border-gray-400 px-4 py-2">Indianapolis</td>
                </tr>
                <tr>
                <td class="border border-gray-400 px-4 py-2">Ohio</td>
                <td class="border border-gray-400 px-4 py-2">Columbus</td>
                </tr>
                <tr>
                <td class="border border-gray-400 px-4 py-2">Michigan</td>
                <td class="border border-gray-400 px-4 py-2">Detroit</td>
                </tr>
            </tbody>
            </table>
        </div>


        <div>
        <table class="table-auto">
            <thead>
                <tr>
                <th class="px-4 py-2">Title</th>
                <th class="px-4 py-2">Author</th>
                <th class="px-4 py-2">Views</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border px-4 py-2">Intro to CSS</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">858</td>
                </tr>
                <tr class="bg-gray-100">
                <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">112</td>
                </tr>
                <tr>
                <td class="border px-4 py-2">Intro to JavaScript</td>
                <td class="border px-4 py-2">Chris</td>
                <td class="border px-4 py-2">1,280</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}