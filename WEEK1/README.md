TypeScript Mastery Challenge – Task Manager

هذا المشروع هو تنفيذ عملي لتحدي MEGA TEAM الذي يغطي دروس TypeScript من الدرس 1 إلى 15، والمطلوب فيه إنشاء مشروع TypeScript كامل وتطبيق كل المفاهيم الأساسية من الدروس داخل الملفات: variables.ts – arrays.ts – functions.ts – typeAliases.ts – tuples.ts – main.ts.
المشروع بيطبق الأنواع الثابتة، التعامل مع المصفوفات، الدوال، النوعيات المخصصة، الـ tuples، وأخيرًا مشروع صغير Task Manager.

What is TypeScript?

TypeScript هو JavaScript ولكن بإضافة أنواع ثابتة (Static Typing) تظهر الأخطاء أثناء الكتابة قبل التشغيل، وده بيخلي التطوير أسهل وأسرع وأكثر أمانًا.

Project Structure

/TypeScript-Mastery-Challenge
├── tsconfig.json
├── README.md
└── src/
  ├── variables.ts
  ├── arrays.ts
  ├── functions.ts
  ├── typeAliases.ts
  ├── tuples.ts
  └── main.ts

What I Completed in This Challenge

إعداد TypeScript: إنشاء tsconfig.json، تفعيل strict mode، تشغيل tsc --watch، وتجميع الملفات.
variables.ts: تعريف أنواع string/number/boolean، استخدام any مرة واحدة، literal type.
arrays.ts: مصفوفات typed، مصفوفات متعددة الأبعاد، دوال push/pop آمنة.
functions.ts: دوال بأنواع ثابتة، optional و default parameters، rest parameter، arrow + forEach.
typeAliases.ts: type alias بسيط + object بداخل union و literal types.
tuples.ts: tuple ثابت، ودالة ترجع tuple.
main.ts: إنشاء TaskStatus و Task، إنشاء tasks و history و summary، كتابة دوال addTask و updateTask و addMultipleTasks و printTasks، تحديث summary بعد كل عملية، وتشغيل سيناريو تجريبي كامل.

Running the Project

شغل المترجم:
tsc --watch
ثم في Terminal آخر:
node dist/main.js

Expected Output

TS Task Manager v1
Tasks list:

[1] Wash dishes (pending)

[2] Write report (done)

[3] Call client (pending)

History log (snapshots):
Snapshot 1:

[1] Wash dishes -> pending
Snapshot 2:

[2] Write report -> pending
Snapshot 3:

[3] Call client -> pending
Snapshot 4:

[2] Write report -> done

Summary counts [pending, done, blocked]: [2, 1, 0]

Evaluation Checklist

✔️ Setup + tsconfig
✔️ Variables + any + literal types
✔️ Arrays + multidimensional arrays
✔️ Functions (optional, default, rest, arrow)
✔️ Type Aliases
✔️ Tuples
✔️ Mini Project: Task Manager

Notes

المشروع مكتمل بالكامل بدون أخطاء وتم تشغيله وإنتاج مخرجات صحيحة.

Author

Ahmed — Frontend (MEGA TEAM Challenge)