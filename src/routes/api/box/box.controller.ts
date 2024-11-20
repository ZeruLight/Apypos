import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import User from "../../../model/user";

export const get = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };

  const doc = await User.findOne(filter);
  const data = {
    box: doc.box,
  };
  encryptAndSend(data, res, req);
};
export const storageInfo = (req: Request, res: Response) => {
  const data = {
    storage_info: {
      storage_details: [
        {
          max: 100,
          name: "storageInfo",
          now: 0,
          storage_idx: 1,
        },
        {
          max: 100,
          name: "storageInfo",
          now: 0,
          storage_idx: 2,
        },
      ],
      storage_limit: 1000,
      storage_num: 100,
    },
  };
  encryptAndSend(data, res, req);
};

export const otomoGet = (req: Request, res: Response) => {
  const data = {
    otomos: [],
  };
  encryptAndSend(data, res, req);
};

export const equipCapacityInfo = (req: Request, res: Response) => {
  const data = {
    max: 10000,
    now: 0,
    price: 0,
  };
  encryptAndSend(data, res, req);
};

export const equipCapacityExpand = (req: Request, res: Response) => {
  const data = {
    max: 10000,
    now: 0,
    price: 0,
  };
  encryptAndSend(data, res, req);
};

export const stampGet = (req: Request, res: Response) => {
  const data = {
    stamp_sets: [
      {
        created: 0,
        mst_stamp_set_id: 67667029,
      },
    ],
  };
  encryptAndSend(data, res, req);
};
export const stampHoldGet = (req: Request, res: Response) => {
  const data = {
    hold_stamp_ids: [
      //numbers
    ],
  };
  encryptAndSend(data, res, req);
};
export const stampShopList = (req: Request, res: Response) => {
  const data = {
    stamp_shop_list: [
      {
        end: 0,
        mst_stamp_set_id: 67667029,
        remain_id: 0,
        start: 0,
        type: 0,
        value: 0,
      },
    ],
  };
  encryptAndSend(data, res, req);
};
export const paymentLimitGet = (req: Request, res: Response) => {
  const data = {
    payment_limits: [
      {
        amount: 1,
        created: 1725029111,
        limit: 0,
        mst_payment_id: 1573159746,
      },
      {
        amount: 1,
        created: 1725029111,
        limit: 0,
        mst_payment_id: 3301823224,
      },
      {
        amount: 1,
        created: 1725029111,
        limit: 0,
        mst_payment_id: 3016417902,
      },
    ],
  };
  encryptAndSend(data, res, req);
};

export const PaymentGet = (req: Request, res: Response) => {
  const data = {
    payments: [
      {
        amount: 1,
        mst_payment_id: 1573159746,
      },
    ],
  };
  encryptAndSend(data, res, req);
};
export const leveupAuto = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let targetIndex;
  switch (req.body.type) {
    case "hp":
      // Increment HP
      doc.box.monument.mlv.hp = doc.box.monument.mlv.hp+1;
      // Increase HR
      doc.box.monument.hr = doc.box.monument.hr+1;
      // Find the index of the augite item
      targetIndex = doc.box.monument.augite.findIndex(
        (item) => item.mst_augite_id === 2047024966
      );

      // Replace the item in the array
      doc.box.monument.augite[targetIndex].amount = Math.max(
        doc.box.monument.augite[targetIndex].amount - 10,
        0
      );

      break;
  }
  const update = { box: doc.box };

  await User.findByIdAndUpdate(doc.id, update);
  const data = {
    monument_levelup: {
      capacity: doc.box.capacity,
      monument: doc.box.monument,
    },
  };
  encryptAndSend(data, res, req);
};
