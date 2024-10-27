import fs from "fs";
import crypto from "crypto";

function readOrders() {
  const ordersData = fs.readFileSync("./data/order.json");
  const parsedData = JSON.parse(ordersData);
  return parsedData;
}
function readComments() {
  const commentsData = fs.readFileSync("./data/comments.json");
  const parsedData = JSON.parse(commentsData);
  return parsedData;
}

const fetchOrdersList = (req, res, next) => {
  try {
    const ordersList = readOrders();
    res.status(200).json(ordersList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error reading orders list data" });
  }
};

const addOrder = (req, res, next) => {
  try {
    const newOrder = {
      order_id: crypto.randomUUID(),
      event_name: req.body.event_name,
      host_name: req.body.host_name,
      location: req.body.location,
      number_of_guests: req.body.number_of_guests,
      event_date: req.body.event_date,
      event_start_time: req.body.event_start_time,
      event_end_time: req.body.event_end_time,
      hasBreakfast: req.body.hasBreakfast,
      hasAmBreak: req.body.hasAmBreak,
      hasLunch: req.body.hasLunch,
      hasPmBreak: req.body.hasPmBreak,
      beverage_options: {
        hasCoffee: req.body.beverage_options.hasCoffee,
        hasWater: req.body.beverage_options.hasWater,
        hasPop: req.body.beverage_options.hasPop,
        hasJuice: req.body.beverage_options.hasJuice,
        hasSparklingWater: req.body.beverage_options.hasSparklingWater,
        hasTea: req.body.beverage_options.hasTea,
        hasDecaf: req.body.beverage_options.hasDecaf,
      },
      service_options: {
        breakfast_menu: req.body.service_options.breakfast_menu,
        am_break_menu: req.body.service_options.am_break_menu,
        lunch_menu: req.body.service_options.lunch_menu,
        pm_break_menu: req.body.service_options.pm_break_menu,
      },
      status: req.body.status,
      created_timestamp: Date.now(),
    };

    const ordersList = readOrders();
    ordersList.push(newOrder);
    fs.writeFileSync("./data/order.json", JSON.stringify(ordersList));

    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error writing order data" });
  }
};

const fetchOrderDetails = (req, res, next) => {
  try {
    const orderId = req.params.order_id;
    const ordersList = readOrders();
    const orderDetails = ordersList.find((order) => order.order_id === orderId);

    if (!orderDetails) {
      return res
        .status(404)
        .json({ msg: `An order with the id of ${orderId} was not found` });
    }

    res.status(200).json(orderDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error reading order data" });
  }
};

const updateOrder = (req, res, next) => {
  try {
    const orderId = req.params.order_id;
    const ordersList = readOrders();
    const orderDetails = ordersList.find((order) => order.order_id === orderId);
    const newOrderList = ordersList.filter(
      (order) => order.order_id !== orderId
    );

    if (!orderDetails) {
      return res
        .status(404)
        .json({ msg: `An order with the id of ${orderId} was not found` });
    }

    const updatedOrder = {
      order_id: orderDetails.order_id,
      event_name: req.body.event_name,
      host_name: req.body.host_name,
      location: req.body.location,
      number_of_guests: req.body.number_of_guests,
      event_date: req.body.event_date,
      event_start_time: req.body.event_start_time,
      event_end_time: req.body.event_end_time,
      hasBreakfast: req.body.hasBreakfast,
      hasAmBreak: req.body.hasAmBreak,
      hasLunch: req.body.hasLunch,
      hasPmBreak: req.body.hasPmBreak,
      beverage_options: {
        hasCoffee: req.body.beverage_options.hasCoffee,
        hasWater: req.body.beverage_options.hasWater,
        hasPop: req.body.beverage_options.hasPop,
        hasJuice: req.body.beverage_options.hasJuice,
        hasSparklingWater: req.body.beverage_options.hasSparklingWater,
        hasTea: req.body.beverage_options.hasTea,
        hasDecaf: req.body.beverage_options.hasDecaf,
      },
      service_options: {
        breakfast_menu: req.body.service_options.breakfast_menu,
        am_break_menu: req.body.service_options.am_break_menu,
        lunch_menu: req.body.service_options.lunch_menu,
        pm_break_menu: req.body.service_options.pm_break_menu,
      },
      status: req.body.status,
      created_timestamp: orderDetails.timestamp,
      updated_timestamp: Date.now(),
    };

    newOrderList.push(updatedOrder);
    console.log(newOrderList);
    fs.writeFileSync("./data/order.json", JSON.stringify(newOrderList));
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating this order data" });
  }
};

const cancelOrder = (req, res, next) => {
  try {
    const orderId = req.params.order_id;
    const ordersList = readOrders();
    const orderDetails = ordersList.find((order) => order.order_id === orderId);

    if (!orderDetails) {
      return res
        .status(404)
        .json({ msg: `An order with the id of ${orderId} was not found` });
    }

    const newOrderList = ordersList.filter(
      (order) => order.order_id !== orderId
    );

    fs.writeFileSync("./data/order.json", JSON.stringify(newOrderList));
    res.status(204).send("Status: Order deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting this order data" });
  }
};

const fetchOrderComments = (req, res, next) => {
  try {
    const orderId = req.params.order_id;
    const commentsData = readComments();
    const commentsList = commentsData
      .filter((comments) => comments.order_id === orderId)
      .sort((a, b) => a.timestamp - b.timestamp);

    const formatCommentsDate = commentsList.map((comment) => {
      return {
        ...comment,
        timestamp: new Date(comment.timestamp).toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      };
    });

    res.status(200).json(formatCommentsDate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error reading order data" });
  }
};

const addOrderComment = (req, res, next) => {
  try {
    const orderId = req.params.order_id;
    const newComment = {
      comment_id: crypto.randomUUID(),
      order_id: orderId,
      name: req.body.name,
      role: req.body.role,
      comment: req.body.comment,
      timestamp: Date.now(),
    };

    const commentsData = readComments();
    commentsData.push(newComment);

    fs.writeFileSync("./data/comments.json", JSON.stringify(commentsData));

    res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error writing comment data" });
  }
};

export {
  fetchOrdersList,
  addOrder,
  fetchOrderDetails,
  updateOrder,
  cancelOrder,
  fetchOrderComments,
  addOrderComment,
};
