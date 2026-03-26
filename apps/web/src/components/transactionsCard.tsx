"use client";
type Transaction = {
  _id: string;
  amount: number;
  type: "sent" | "received";
  message: string;
  addedAt: string;
  senderNumber: string;
  recieverNumber: string;
  receiverName: string;
  note: string;
};

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const isSent = transaction.type === "sent";

  const formattedDate = new Date(transaction.addedAt).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(transaction.receiverName)

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-neutral-700 p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
              isSent ? "bg-orange-500" : "bg-green-500"
            }`}
          >
            {transaction.receiverName?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-200">
              {transaction.receiverName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {transaction.senderNumber}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
              isSent
                ? "bg-orange-100 text-orange-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {isSent ? "Sent" : "Received"}
          </span>

          <p
            className={`mt-2 text-base sm:text-lg font-bold ${
              isSent ? "text-red-500" : "text-green-600"
            }`}
          >
            {isSent ? "-" : "+"}₹{transaction.amount}
          </p>

          <p className="text-xs text-gray-400 mt-1">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
