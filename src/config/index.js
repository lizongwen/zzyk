import Vue from 'vue'
import {
	message,
	Rate,
	Button,
	Breadcrumb,
	Icon,
	Pagination
} from 'ant-design-vue'

Vue.use(Rate).use(Button).use(Breadcrumb).use(Icon).use(Pagination)

Vue.prototype.$message=message
