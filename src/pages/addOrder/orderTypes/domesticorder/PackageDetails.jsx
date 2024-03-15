import React, { useState } from "react";

const PackageDetails = () => {
  const [packagedata, setPackagedata] = useState([
    {
      weightOfPacket: "",
      lengthOfPacket: "",
      widthOfPacket: "",
      heightOfPacket: "",
      prefilleddataOfPacket: "",
    },
  ]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPackagedata({ ...packagedata, name: value });
    console.log(value);
  };
  return (
    <div>
      <form>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-opensans">Weight</p>
            <input
              type="number"
              name="weightOfPacket"
              value={packagedata.weightOfPacket}
              placeholder="Enter weight of package here"
              onChange={changeHandler}
              className="w-full h-10 border rounded px-3 py-2 mt-1"
            />
          </div>
          <div className="">
            <div className=" w-full flex justify-between">
              <div className="w-1/3 mr-2">
                <p className="font-opensans">Height</p>
                <input
                  type="number"
                  name="heightOfPacket"
                  value={packagedata.heightOfPacket}
                  placeholder="Enter height of package here"
                  onChange={changeHandler}
                  className=" h-10 border rounded px-3 py-2 mt-1"
                />
              </div>
              <div className="w-1/3 mr-2">
                <p className="font-opensans">Length</p>
                <input
                  type="number"
                  name="lengthOfPacket"
                  value={packagedata.lengthOfPacket}
                  placeholder="Enter length of package here"
                  onChange={changeHandler}
                  className="h-10 border rounded px-3 py-2 mt-1"
                />
                
              </div>
              <div className="w-1/3 ">
                <p className="font-opensans">Width</p>
                <div className="flex relative items-center">
                  <input
                    type="number"
                    name="widthOfPacket"
                    value={packagedata.widthOfPacket}
                    placeholder="Enter width of package here"
                    onChange={changeHandler}
                    className="h-10 border rounded px-3 py-2 mt-1"
                  />
                  {/* <div className="absolute right-0 ">
                    <p className="align-baseline content-center self-end">cm</p>
                  </div> */}
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-2">
              Note: Dimensions should be in centimeters only & values should be
              greater than 0.50 cm.
            </p>

            <div>
              <h6 className="mt-3 mb-3 font-semibold">OR</h6>
              <p className="font-opensans">
                Select from your saved packages to autofill package dimensions
              </p>
              <select
                name="prefilleddataOfPacket"
                value={packagedata.prefilleddataOfPacket}
                onChange={changeHandler}
                className="w-full h-10 border rounded px-3 py-2 mt-1"
              >
                <option value="Package1">Package1</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-4 bg-blue-100 rounded p-3">
        <p className="font-semibold">Volumteric weight 3.00 KG</p>{" "}
      </div>
      <div  className="mt-4 bg-blue-100 rounded p-3">
        <p className="font-semibold">Applicable Weight 2.00 Kg</p>
<p className="text-xs">
*Applicable weight is the heavier among the two weights that is Dead Weight V/s the Volumetric Weight, basis on which freight charges are calculated.
*Final chargeable weight will be based on the weight slab of the courier selected before shipping</p>
        
      </div>
    </div>
  );
};

export default PackageDetails;
