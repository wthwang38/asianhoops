function Blogs(){
    return(
      <div>
      <div className="bg-blue-600">
        Blog
      </div>
      <div className="all content">
        <div className="side bar mt-4 w-100 fixed">
          <div className="border-b-2 pb-lg">
            <h2 className="font-bold">By Tournaments</h2>
            <p>Summer Nights</p>
            <p>3-3 Plays</p>
          </div>
        <div className="pt-sm"></div>
          <h2 className="font-bold">By Year</h2>
          <p>2023</p>
          <p>2022</p>
          <p>2021</p>
        </div>
        <div className="main content mt-4 ml-40">
          <div className="grid grid-cols-5 gap-3 mt-5 mb-5 border-b-2 p-sm">
            <div className="date">
              <h2>March 7, 2020</h2>
            </div>
            <div className="col-span-4">
              <h3>2005 1st Annual Asian Tournament of Champions @ Ramapo College, Mahwah, New Jersey</h3>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-5 mb-5 border-b-2 p-sm">
            <div className="date">
              <h2>March 7, 2020</h2>
            </div>
            <div className="col-span-4">
              <h3>2005 1st Annual Asian Tournament of Champions @ Ramapo College, Mahwah, New Jersey</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default Blogs